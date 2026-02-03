/**
 * Ana uygulama giriş noktası
 */
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import config from './config/index.js';
import { notFoundHandler, errorHandler } from './middleware/index.js';
import { logger } from './utils/index.js';
import filmRoutes from './routes/filmRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors(config.cors));
app.use(express.json());

// Request logging (development)
if (config.server.isDev) {
  app.use((req, res, next) => {
    logger.request(req);
    next();
  });
}

// API Routes
app.use(`${config.api.prefix}/films`, filmRoutes);

// Health check endpoint
app.get(`${config.api.prefix}/health`, (req, res) => {
  res.json({ 
    success: true,
    status: 'ok', 
    timestamp: new Date().toISOString(),
    environment: config.server.env,
  });
});

// Production: Serve frontend static files
if (!config.server.isDev) {
  const clientPath = path.join(__dirname, '../client/dist');
  app.use(express.static(clientPath));
  
  // SPA fallback - tüm diğer route'ları index.html'e yönlendir
  app.get('*', (req, res, next) => {
    // API route'larını atla
    if (req.path.startsWith('/api')) {
      return next();
    }
    res.sendFile(path.join(clientPath, 'index.html'));
  });
}

// Error handlers (sadece API için)
app.use(`${config.api.prefix}/*`, notFoundHandler);
app.use(errorHandler);

// Start server
app.listen(config.server.port, () => {
  logger.success(`🚀 Server running on http://localhost:${config.server.port}`);
  logger.info(`📁 Environment: ${config.server.env}`);
});

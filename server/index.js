/**
 * Ana uygulama giriş noktası
 */
import express from 'express';
import cors from 'cors';
import config from './config/index.js';
import { notFoundHandler, errorHandler } from './middleware/index.js';
import { logger } from './utils/index.js';
import filmRoutes from './routes/filmRoutes.js';

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

// Routes
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

// Error handlers
app.use(notFoundHandler);
app.use(errorHandler);

// Start server
app.listen(config.server.port, () => {
  logger.success(`🚀 Server running on http://localhost:${config.server.port}`);
  logger.info(`📁 Environment: ${config.server.env}`);
});

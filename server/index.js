import express from 'express';
import cors from 'cors';
import 'dotenv/config'; // Load .env
import filmRoutes from './routes/filmRoutes.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/films', filmRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

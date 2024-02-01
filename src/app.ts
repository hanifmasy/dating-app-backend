import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth';
import profileRoutes from './routes/profiles';
import premiumRoutes from './routes/premium';
import settingsRoutes from './routes/settings';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/premium', premiumRoutes);
app.use('/api/settings', settingsRoutes);

app.get('/', (req, res) => {
  res.send('Dating App Running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

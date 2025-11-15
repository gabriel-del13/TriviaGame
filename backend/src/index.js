const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();
const { initDB } = require('./config/db');
initDB();
const app = express();
const PORT = process.env.PORT || 5000;

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Test DB connection
pool.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to database:', err.stack);
  } else {
    console.log('Database connected successfully');
    release();
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

// Import routes
const categoryRoutes = require('./routes/categories');
const questionRoutes = require('./routes/questions');
const adminRoutes = require('./routes/admin');

app.use('/api/categories', categoryRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/admin', adminRoutes);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running on port ${PORT}`);
});

module.exports = { pool };
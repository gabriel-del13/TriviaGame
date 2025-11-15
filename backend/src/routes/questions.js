const express = require('express');
const router = express.Router();
const { pool } = require('../config/db');

// Get questions by category
router.get('/category/:categoryId', async (req, res) => {
  try {
    const { categoryId } = req.params;
    const limit = parseInt(req.query.limit) || 10;
    const difficulty = req.query.difficulty;
    
    let query = 'SELECT * FROM questions WHERE category_id = $1';
    const params = [categoryId];
    
    if (difficulty && ['easy', 'medium', 'hard'].includes(difficulty.toLowerCase())) {
      query += ' AND difficulty = $2';
      params.push(difficulty.toLowerCase());
      query += ' ORDER BY RANDOM() LIMIT $3';
      params.push(limit);
    } else {
      query += ' ORDER BY RANDOM() LIMIT $2';
      params.push(limit);
    }
    
    const result = await pool.query(query, params);
    
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get random questions (All category)
router.get('/random', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const difficulty = req.query.difficulty;
    
    let query = 'SELECT * FROM questions';
    const params = [];
    
    if (difficulty && ['easy', 'medium', 'hard'].includes(difficulty.toLowerCase())) {
      query += ' WHERE difficulty = $1';
      params.push(difficulty.toLowerCase());
      query += ' ORDER BY RANDOM() LIMIT $2';
      params.push(limit);
    } else {
      query += ' ORDER BY RANDOM() LIMIT $1';
      params.push(limit);
    }
    
    const result = await pool.query(query, params);
    
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
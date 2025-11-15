require('dotenv').config();
const { initDB } = require('../src/config/db');
const { seedAdminUser } = require('./seed-admin');
const { seedAnimalsCategory } = require('./seed-animals');
const { seedHistoryCategory } = require('./seed-history');
const { seedBibleCategory } = require('./seed-bible');
const { seedFitnessCategory } = require('./seed-fitness');
const { seedOnePieceCategory } = require('./seed-onepiece');

// Wait for database to be ready
async function waitForDatabase(maxRetries = 30, delay = 2000) {
  const { pool } = require('../src/config/db');
  
  for (let i = 0; i < maxRetries; i++) {
    try {
      const client = await pool.connect();
      await client.query('SELECT 1');
      client.release();
      console.log('✓ Database is ready');
      return true;
    } catch (err) {
      console.log(`Waiting for database... (${i + 1}/${maxRetries})`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  throw new Error('Database connection timeout');
}

async function initialize() {
  try {
    console.log('Starting initialization...');
    
    // Wait for database
    await waitForDatabase();
    
    // Initialize database tables
    console.log('Initializing database tables...');
    await initDB();
    
    // Seed admin user
    console.log('Creating admin user...');
    await seedAdminUser();
    
    // Seed animals category
    console.log('Seeding Animals category...');
    await seedAnimalsCategory(false); // Don't close pool, server will use it
    
    // Seed history category
    console.log('Seeding History category...');
    await seedHistoryCategory(false); // Don't close pool, server will use it
    
    // Seed bible category
    console.log('Seeding Bible category...');
    await seedBibleCategory(false); // Don't close pool, server will use it
    
    // Seed fitness category
    console.log('Seeding Fitness category...');
    await seedFitnessCategory(false); // Don't close pool, server will use it
    
    // Seed One Piece category
    console.log('Seeding One Piece category...');
    await seedOnePieceCategory(false); // Don't close pool, server will use it
    
    console.log('✓ Initialization completed successfully');
    
    // Start the server (if not in development mode with nodemon)
    if (process.env.NODE_ENV !== 'development' || process.argv.includes('--no-server')) {
      console.log('Starting server...');
      require('../src/index.js');
    } else {
      console.log('✓ Seed completed. Server will be started by nodemon...');
      process.exit(0);
    }
    
  } catch (err) {
    console.error('Initialization error:', err);
    process.exit(1);
  }
}

initialize();


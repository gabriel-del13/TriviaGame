require('dotenv').config();
const bcrypt = require('bcrypt');
const { pool } = require('../src/config/db');

async function seedAdminUser() {
  const client = await pool.connect();
  
  try {
    // Credenciales por defecto (cambiar en producción)
    const defaultUsername = process.env.ADMIN_USERNAME || 'admin';
    const defaultPassword = process.env.ADMIN_PASSWORD || 'admin123';
    
    // Verificar si ya existe un usuario admin
    const checkResult = await client.query(
      'SELECT * FROM admin_users WHERE username = $1',
      [defaultUsername]
    );
    
    if (checkResult.rows.length > 0) {
      console.log(`✓ Usuario admin "${defaultUsername}" ya existe`);
      return;
    }
    
    // Hashear la contraseña
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(defaultPassword, saltRounds);
    
    // Insertar usuario admin
    await client.query(
      'INSERT INTO admin_users (username, password_hash) VALUES ($1, $2)',
      [defaultUsername, passwordHash]
    );
    
    console.log(`✓ Usuario admin creado exitosamente`);
    console.log(`  Usuario: ${defaultUsername}`);
    console.log(`  Contraseña: ${defaultPassword}`);
    console.log(`  ⚠️  IMPORTANTE: Cambia la contraseña en producción!`);
    
  } catch (err) {
    console.error('Error creando usuario admin:', err);
    throw err;
  } finally {
    client.release();
  }
}

// Si se ejecuta directamente
if (require.main === module) {
  seedAdminUser()
    .then(() => {
      console.log('✓ Proceso completado');
      process.exit(0);
    })
    .catch((err) => {
      console.error('Error:', err);
      process.exit(1);
    });
}

module.exports = { seedAdminUser };


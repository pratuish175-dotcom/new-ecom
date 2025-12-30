// backend/createAdmin_verbose.js
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const path = require('path');

console.log('Starting createAdmin_verbose.js');
console.log('cwd:', process.cwd());
console.log('__dirname:', __dirname);
console.log('NODE ENV:', process.env.NODE_ENV || 'not set');
console.log('Checking DB_URI...');

if (!process.env.DB_URI) {
  console.error('ERROR: DB_URI is not set in .env. Please set DB_URI and retry.');
  process.exit(1);
}

console.log('DB_URI present (hidden) length:', process.env.DB_URI.length);

// require Admin model (guard for path)
let Admin;
try {
  Admin = require('./src/models/Admin');
  console.log('Loaded Admin model from ./src/models/Admin');
} catch (err) {
  console.error('Failed to load Admin model:', err.message);
  console.error(err);
  process.exit(1);
}

async function run() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');

    const email = 'admin@example.com';
    const exists = await Admin.findOne({ email });
    if (exists) {
      console.log('Admin already exists:', email);
      await mongoose.disconnect();
      process.exit(0);
    }

    const passwordHash = await bcrypt.hash('Admin@123', 10);
    const admin = await Admin.create({ email, passwordHash, name: 'Admin' });
    console.log('Created admin:', admin.email, 'id:', admin._id.toString());

    await mongoose.disconnect();
    console.log('Disconnected. Done.');
    process.exit(0);
  } catch (err) {
    console.error('ERROR during createAdmin:', err);
    try { await mongoose.disconnect(); } catch(e){}
    process.exit(1);
  }
}

run();

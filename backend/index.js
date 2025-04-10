// index.js

const express = require('express');
const { Task, sequelize } = require('./models/Task');

const app = express();
app.use(express.json());

// Test DB connection
sequelize.authenticate()
  .then(() => console.log('Database connected.'))
  .catch(err => console.error('Connection error:', err));

// Sync model
sequelize.sync()
  .then(() => console.log('Tables synced.'))
  .catch(err => console.error('Sync error:', err));

// Example route
app.post('/tasks', async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

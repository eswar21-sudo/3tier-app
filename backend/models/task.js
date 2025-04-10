// models/Task.js

const { Sequelize, DataTypes } = require('sequelize');

// Setup the database connection
const sequelize = new Sequelize('your_db_name', 'your_username', 'your_password', {
  host: 'your-rds-endpoint.amazonaws.com',
  dialect: 'mysql',
});

// Define the Task model
const Task = sequelize.define('Task', {
  task: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  tableName: 'tasks',
  timestamps: false,
});

module.exports = { Task, sequelize };

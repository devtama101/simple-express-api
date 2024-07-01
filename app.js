require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const itemRoutes = require('./routes/itemRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/items', itemRoutes);

// Error handling middleware
app.use(errorHandler);

if (process.env.NODE_ENV !== 'test') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app; // Export app for testing

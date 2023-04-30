const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// Set up port and initialize app
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Start server after DB connection
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});
const express = require('express');
const path = require('path');
const app = express();
const MongoDB = require('./db');

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.static(path.join(__dirname, '../client'))); // Serve static files

// Database connection
MongoDB();

// Routes
app.use('/api', require("./routes/userrouter")); // User creation routes
app.use('/api', require("./routes/WorkoutsModel")); // Workout details routes
app.use('/api', require("./routes/personworkout")); // myWorkout details routes



// Start server
const port = 7000;
app.listen(port, () => {
    console.log(`Server is running on port number ${port}`);
});

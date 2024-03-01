// Importing required modules
import express from 'express';

// Creating an Express application
const app = express();

// // Define a route handler for the default route
app.post('/user', (req, res) => {
    res.send('Hello World!');
});

// Starting the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

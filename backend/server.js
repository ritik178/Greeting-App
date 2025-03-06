const express = require('express');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for frontend requests


// Define a route to greet the user
app.get('/api/greet', ( req, res) => {
    // Get the name from the query parameters(send by the frontend)
    const name = req.query.name;
    // Check if the name is empty or not
    if(!name){
        // Send an error response if the name is empty with a status code of 400
        return res.status(400).json({ error: "Name is required."});
    }
    // Send a greeting message if the name is not empty
    res.json({ message: `Hello, ${name}! Welcome to Younglabs.`});
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
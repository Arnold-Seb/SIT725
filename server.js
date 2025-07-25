const express = require('express');
const app = express();
const port = 3000;

// Serve static files from "public" folder
app.use(express.static('public'));

// Add endpoint: /add?num1=10&num2=20
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }

    const sum = num1 + num2;
    res.json({ result: sum });
});

// Root route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

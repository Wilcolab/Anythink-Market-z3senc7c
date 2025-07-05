const express = require('express');

const app = express();
app.use(express.json());

const PORT = 8001;

const tasks = [
    "Write a diary entry from the future",
    "Create a time machine from a cardboard box",
    "Plan a trip to the dinosaurs",
    "Draw a futuristic city",
    "List items to bring on a time-travel adventure"
];

// Root endpoint
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Add a new task
app.post('/tasks', (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ message: "Task text is required" });
    }
    tasks.push(text);
    res.json({ message: "Task added successfully" });
});

// Get all tasks
app.get('/tasks', (req, res) => {
    res.json({ tasks });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
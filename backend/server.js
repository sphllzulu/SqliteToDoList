const express = require('express');
const db = require('./db'); 
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors())


// Create a new to-do
app.post('/todos', (req, res) => {
  const { text } = req.body;
  db.run('INSERT INTO todos (text) VALUES (?)', [text], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID });
  });
});

// Read all to-dos
app.get('/todos', (req, res) => {
  db.all('SELECT * FROM todos', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Update a to-do (mark as completed or edit text)
app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { text, completed } = req.body;
  db.run(
    'UPDATE todos SET text = ?, completed = ? WHERE id = ?',
    [text, completed, id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ changes: this.changes });
    }
  );
});

// Update a to-do's text
app.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const { text } = req.body; // New text for the to-do
  
    db.run(
      'UPDATE todos SET text = ? WHERE id = ?',
      [text, id],
      function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ changes: this.changes }); // Return the number of rows updated
      }
    );
  });

// Delete a to-do
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM todos WHERE id = ?', [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ changes: this.changes });
  });
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
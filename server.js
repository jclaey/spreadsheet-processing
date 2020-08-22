require('dotenv').config();
const http    = require('http'),
      path    = require('path'),
      express = require('express');

// Initialize Express and create server
const app    = express(),
      server = http.createServer(app);

// Endable use of static files in 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
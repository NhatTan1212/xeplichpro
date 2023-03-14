const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')))
// Set up a route to serve the index.html file
app.get('/', function(req, res) {
  res.sendFile('index.html');
});

// Start the browser and run the scraper

app.use(express.static('public'));

// Start the server
app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});

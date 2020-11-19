const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.static('public'));

const images = [
  'image-1',
  'image-2',
  'image-3',
  'image-4',
  'image-5',
  'image-6',
];

app.get('/api/images', (req, res) => {
  res.json(images);
});

app.listen(PORT, () => {
  console.log('App running on PORT: ' + PORT);
});

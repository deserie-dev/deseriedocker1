const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('This app is running inside a container!');
});

app.listen('3000', '0.0.0.0');
console.log('deseriedocker1 is ready');



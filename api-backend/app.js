const express = require('express');
const app = express();
const port = 3000; // You can use any available port

app.get('/', (req, res) => {
  res.send('JN Courier api backend!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

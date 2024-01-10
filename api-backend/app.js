const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/index');
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('JN Courier api backend!');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

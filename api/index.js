/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('The API is working'));

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});

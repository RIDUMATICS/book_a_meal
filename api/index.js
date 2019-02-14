/* eslint-disable no-console */
import express from 'express';

const app = express();
const PORT = 8080;

app.get('/', (req, res) => res.send('The API is working'));

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});

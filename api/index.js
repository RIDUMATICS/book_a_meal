/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import mealRouter from './routes/v1/meal.route';
import menuRouter from './routes/v1/menu.route';
import orderRouter from './routes/v1/orders.route';

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('The API is working'));

app.use('/api/v1/meals', mealRouter);
app.use('/api/v1/menus', menuRouter);
app.use('/api/v1/orders', orderRouter);

module.exports = app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});

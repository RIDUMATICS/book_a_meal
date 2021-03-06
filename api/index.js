/* eslint-disable no-console */
import '@babel/polyfill';
import * as dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import Sequelize from 'sequelize';
import mealRouter from './routes/v1/meal.route';
import menuRouter from './routes/v1/menu.route';
import orderRouter from './routes/v1/orders.route';
import userRoute from './routes/v1/user.route';
import passportConfig from './config/passport';
import db from './database/models';

let sequelize = null;

dotenv.config();

if (process.env.DATABASE_URL) {
  // the application is executed on Heroku ... use the postgres database
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
  });
}

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('The API is working'));

app.use(passport.initialize());

passportConfig(passport);

app.use('/auth', userRoute);
app.use('/api/v1/meals', mealRouter);
app.use('/api/v1/menus', menuRouter);
app.use('/api/v1/orders', orderRouter);


export default app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});

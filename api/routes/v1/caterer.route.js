import { Router } from 'express';
import CatererController from '../../controller/caterer.controller';

const catererRoute = Router();

catererRoute.post('/signup', CatererController.addCaterer);
catererRoute.post('/login', CatererController.loginCaterer);

export default catererRoute;

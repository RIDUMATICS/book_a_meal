import { Router } from 'express';
import CatererController from '../../controller/caterer.controller';

const catererRoute = Router();

catererRoute.post('/', CatererController.addCaterer);

export default catererRoute;

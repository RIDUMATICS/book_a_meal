import { Router } from 'express';
import MenuController from '../../controller/menu.controller';

const menuRouter = Router();

menuRouter.get('/', MenuController.fetchMenu);
menuRouter.get('/:section', MenuController.fetchSingleMenu);
menuRouter.post('/', MenuController.AddNewMenu);

export default menuRouter;

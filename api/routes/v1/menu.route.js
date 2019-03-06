import { Router } from 'express';
import passport from 'passport';
import MenuController from '../../controller/menu.controller';

const menuRouter = Router();

menuRouter.get('/', passport.authenticate('jwt', { session: false }), MenuController.fetchMenu);
menuRouter.get('/:adminId', passport.authenticate('jwt', { session: false }), MenuController.fetchSingleAdminMenu);
menuRouter.post('/', passport.authenticate('jwt', { session: false }), MenuController.AddNewMenu);

export default menuRouter;

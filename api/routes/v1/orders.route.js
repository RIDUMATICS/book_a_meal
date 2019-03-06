import { Router } from 'express';
import passport from 'passport';
import OrderController from '../../controller/orders.controler';

const orderRouter = Router();

orderRouter.get('/', passport.authenticate('jwt', { session: false }), OrderController.fetchAllOrders);
orderRouter.put('/:id', passport.authenticate('jwt', { session: false }), OrderController.updateOrders);
orderRouter.post('/', passport.authenticate('jwt', { session: false }), OrderController.addOrder);
export default orderRouter;

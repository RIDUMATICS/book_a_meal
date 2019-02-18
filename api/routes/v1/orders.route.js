import { Router } from 'express';
import OrderController from '../../controller/orders.controler';

const orderRouter = Router();

orderRouter.get('/', OrderController.fetchAllOrders);
orderRouter.put('/:id', OrderController.updateOrders);
orderRouter.post('/', OrderController.addOrder);
export default orderRouter;

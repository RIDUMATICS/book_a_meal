/* eslint-disable no-console */
import OrderService from '../services/orders.service';

const OrderController = {
  fetchAllOrders(req, res) {
    const allMeals = OrderService.fetchOrders();
    return res.status(200).json({ status: 'success', data: allMeals });
  },
  updateOrders(req, res) {
    const { id } = req.params;
    const value = req.body;
    const updatedOrder = OrderService.updateOrder(id, value);
    return res.status(updatedOrder.status).json(updatedOrder);
  },
  addOrder(req, res) {
    const newOrder = req.body;
    const createdMeal = OrderService.addOrder(newOrder);
    res.status(201).json({ status: 'success', data: createdMeal });
  },
};

export default OrderController;

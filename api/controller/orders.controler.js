import OrderService from '../services/orders.service';

const OrderController = {
  fetchAllOrders(req, res) {
    if (req.user.role === 'admin') {
      const allMeals = OrderService.fetchOrders();
      allMeals.then(respMeals => res.status(200).json({ status: 'success', data: respMeals }));
    } else {
      res.send(401);
    }
  },
  updateOrders(req, res) {
    const { id } = req.params;
    const value = req.body;
    const updatedOrder = OrderService.updateOrder(id, value);
    updatedOrder.then(resp => res.status(resp.status).json(resp));
  },
  addOrder(req, res) {
    const newOrder = req.body;
    newOrder.userId = req.user.id;
    const createdMeal = OrderService.addOrder(newOrder);
    createdMeal.then(meal => res.status(201).json({ status: 'success', data: meal }));
  },
};

export default OrderController;

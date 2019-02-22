import dummyData from '../utils/dummyData';
import Orders from '../models/orders.model';


const OrderService = {
  fetchOrders() {
    const validOrders = dummyData.orders.map((order) => {
      const newOrder = new Orders();
      newOrder.id = order.id;
      newOrder.userId = order.userId;
      newOrder.menuId = order.menuId;
      newOrder.status = order.status;
      newOrder.quantity = order.quantity;
      newOrder.price = order.price;
      return newOrder;
    });
    return validOrders;
  },
  updateOrder(id, value) {
    // eslint-disable-next-line eqeqeq
    const orderIndex = dummyData.orders.findIndex(currentOrder => currentOrder.id == id);
    if (orderIndex >= 0) {
      const initialOrder = dummyData.orders[orderIndex];
      const newOrder = { ...initialOrder, ...value };
      dummyData.orders[orderIndex] = newOrder;
      return { status: 200, data: newOrder };
    }
    return { status: 204 };
  },
  addOrder(order) {
    const orderLength = dummyData.orders.length;
    const lastId = dummyData.orders[orderLength - 1].id;
    const newId = lastId + 1;
    // eslint-disable-next-line no-param-reassign
    order.id = newId;
    const newOrder = new Orders();
    newOrder.id = order.id;
    newOrder.userId = order.userId;
    newOrder.menuId = order.menuId;
    newOrder.status = order.status;
    newOrder.quantity = order.quantity;
    newOrder.price = order.price;
    dummyData.orders.push(newOrder);
    return newOrder;
  },

};

export default OrderService;

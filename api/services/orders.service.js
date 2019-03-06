import database from '../database/models';

const dateObj = new Date();
const date = `${dateObj.getFullYear()}-${(dateObj.getMonth() + 1).toString().padStart(2, 0)}-${(dateObj.getDate()).toString().padStart(2, 0)}`;

const OrderService = {
  fetchOrders() {
    return database
      .Orders
      .findAll()
      .then(orders => orders);
  },
  updateOrder(id, value) {
    return database
      .Orders
      .findById(id)
      .then((order) => {
        if (!order) {
          return { status: 204 };
        }
        return order
          .update({
            userId: value.userId || order.userId,
            status: value.status || order.status,
            menuId: value.menuId || order.menuId,
            quantity: value.quantity || order.quantity,
            price: value.price || order.price,
            orderTime: value.orderTime || order.orderTime,
            delivery: value.delivery || order.delivery,
          }).then(() => ({ status: 200, data: order }));
      });
  },
  addOrder(orderInput) {
    return database.Orders.create({
      userId: orderInput.userId,
      status: orderInput.status,
      menuId: orderInput.menuId,
      quantity: orderInput.quantity,
      price: orderInput.price,
    }).then(order => ({
      id: order.id,
      userId: orderInput.userId,
      status: orderInput.status,
      menuId: orderInput.menuId,
      quantity: orderInput.quantity,
      price: orderInput.price,
    }));
  },

};

export default OrderService;

import { Order } from "./order.js";

class Customer {
  constructor(name) {
    this.name = name;
    this.orderHistory = [];
  }
  placeOrder(cart) {
    const order = new Order(new Date().toLocaleDateString(), cart);

    this.orderHistory.push(order);
  }
  printOrderHistory() {
    console.log(this.orderHistory);
  }
}

export { Customer };

import { Order } from "./order.js";

class Customer {
  constructor(name) {
    this.name = name;
    this.orderHistory = [];
    this.favorites = [];
  }
  placeOrder(cart) {
    const order = new Order(new Date().toLocaleDateString(), cart);

    this.orderHistory.push(order);
  }
  printOrderHistory() {
    console.log(this.orderHistory);
  }
  //favorties
  addFavorite(item) {
    this.favorites.push(item);
  }
  getFavorites() {
    return this.favorites;
  }
}

export { Customer };

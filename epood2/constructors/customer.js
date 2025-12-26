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
  addFavorite(product, customer) {
    const existing = customer.favorites.includes(product);
    if (!existing) {
      this.favorites.push(product);
      return;
    }
    if (existing) {
      this.favorites.pop(product);
      console.log("popped");

      return;
    }
  }
  isActive(product) {
    const existing = customer.favorites.includes(product);
    console.log(`${product} is  ${existing}`);
    return existing;
  }
  removeFavorite(product, customer) {
    const existing = customer.favorites.includes(product);

    if (existing) {
      this.favorites.pop(product);
      console.log("popped");

      return;
    }
  }
  getFavorites() {
    return this.favorites;
  }
}
export { Customer };
export const customer = new Customer("Alice");

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
    customer.printOrderHistory();
  }
  printOrderHistory() {
    console.log(this.orderHistory);
  }
  //favorties
  addFavorite(product, customer) {
    const favorites = customer.favorites;
    const filtered = favorites.filter(
      (favortiesArray) => favortiesArray.id !== product.id,
    );
    // console.log(filtered);
    if (filtered.length === favorites.length) {
      favorites.push(product);
      // console.log("added to fav");
    } else {
      customer.favorites = filtered;
      // console.log("removed from fav");
    }
  }
  //css südame loogika jaoks
  isActive(toode) {
    const existing = customer.favorites.some(
      (product) => product.id === toode.id,
    );
    return existing;
  }

  getFavorites() {
    return this.favorites;
  }
  // ostukorvi mällu jätmiseks
  getName() {
    return this.name;
  }
}
export { Customer };
export const customer = new Customer("Alice");

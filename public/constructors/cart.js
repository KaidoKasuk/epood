import { customer } from "./customer.js";
class Cart {
  constructor() {
    this.items = [];
  }

  getAllProducts() {
    if (localStorage.getItem(customer.getName()) !== null) {
      const cartItems = JSON.parse(localStorage.getItem(customer.getName()));
      // console.log(cartItems);
      this.items = cartItems;
    }
    return this.items;
  }

  addProduct(product, quantity) {
    const existingItem = cart.items.find(
      (item) => item.product.id === product.id,
    );
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({ product, quantity });
    }
    localStorage.setItem(customer.getName(), JSON.stringify(this.items));
  }
  // vahenda kogust
  removeProduct(product, change) {
    const existing = this.items.find((item) => item.product.id === product.id);

    if (!existing) return;
    if (existing.quantity > 0) {
      existing.quantity -= change;
    }
    if (existing.quantity <= 0) {
      cart.deleteProduct(product);
    }
    localStorage.setItem(customer.getName(), JSON.stringify(this.items));
  }
  //spetsiifilise toote kustutamiseks
  deleteProduct(product) {
    const existing = this.items.find((item) => item.product.id === product.id);

    this.items = this.items.filter((item) => item.product.id !== product.id);
    localStorage.setItem(customer.getName(), JSON.stringify(this.items));
  }

  calculateTotal() {
    return this.items
      .reduce((sum, item) => sum + item.product.price * item.quantity, 0)
      .toFixed(2);
  }
  calculateTax() {
    const price = cart.calculateTotal();
    return (price / 1.22).toFixed(2);
  }

  clearAllItems() {
    this.items = [];
    localStorage.setItem(customer.getName(), JSON.stringify(this.items));
  }

  get totalItems() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }
}

export { Cart };

// Loo ostukorv ja lisa tooted
export const cart = new Cart();

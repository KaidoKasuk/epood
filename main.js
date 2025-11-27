class Product {
  constructor(id, title, price, category) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.category = category;
  }
  describe() {
    return this.title + " " + this.price + " " + this.category;
  }
  static discountedPrice(price, discount) {
    return (price - price * (discount / 100)).toFixed(2);
  }
}
// 1 toodete lisamine e-poodi //
laptop = new Product(1, "sülearvuti", 999.99, "elektroonika");
phone = new Product(2, "luts", 116.99, "elektroonika");

console.log(laptop.describe());
//allahindlus
console.log(Product.discountedPrice(laptop.price, 10)); // 10% allahindlus

// 2 ostukorv //

class Cart {
  constructor() {
    this.items = [];
  }

  addProduct(product, quantity) {
    this.items.push({ product, quantity });
  }
  removeProduct(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }
  calculateTotal() {
    return this.items
      .reduce((sum, item) => sum + item.product.price * item.quantity, 0)
      .toFixed(2);
  }

  get totalItems() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }
}

const cart = new Cart();
//lisan produkte
cart.addProduct(laptop, 3);
cart.addProduct(phone, 0);
console.log(cart.items); // array
console.log(cart.calculateTotal()); // Kokku hind

console.log(cart.totalItems); //kokku asju

// 3 tellimused ja kliendi andmed (appi) //

class Order {
  constructor() {
    this.items = [];
  }
  orderDate(date) {
    return this.items.push({ date });
  }
}
const date = new Date(1);
const order = new Order(cart);
console.log(order.items); // array

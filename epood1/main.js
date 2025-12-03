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
console.log(`allahindlusega: ${Product.discountedPrice(laptop.price, 10)}`);

// 2 ostukorv //

class Cart {
  constructor() {
    this.items = [];
  }

  addProduct(product, quantity) {
    this.items.push({ product, quantity });
  }
  removeProduct(product, change) {
    const existing = this.items.find((item) => item.product.id === product.id);

    if (!existing) return;

    existing.quantity -= change;

    // eemaldab produkti täielikult (vana)
    if (existing.quantity <= 0) {
      this.items = this.items.filter((item) => item.product.id !== product.id);
    }
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
cart.addProduct(phone, 4); //peaks parandama et liidaks mitte ei lisa uue rea kui vaja

// eemaldamine
cart.removeProduct(laptop, 1);

console.log(cart.items); // array
console.log(` hind kokku ${cart.calculateTotal()}`); //  hind kokku
console.log(`tooteid kokku: ${cart.totalItems}`); // asju kokku

// 3 tellimused ja kliendi andmed  //

class Order {
  constructor(date, cart) {
    this.date = date;
    this.cart = cart;
  }
  printOrder() {
    const productLines = this.cart.items.map(
      (item) => `${item.product.title}: ${item.quantity}`
    );
    return `
     Kuupäev: ${
       this.date
     } Hind kokku: ${this.cart.calculateTotal()} Tooted: ${productLines}
  `;
  }
}
const order = new Order("29.11.25", cart);

console.log(order.printOrder());

//alge variant
// console.log(cart.items[1].product.title);

//4 klient //

class Customer {
  constructor(name) {
    this.name = name;
    this.orderHistory = [];
  }
  placeOrder(cart) {
    this.orderHistory.push(order.printOrder());
  }
  printOrderHistory() {
    console.log(this.orderHistory);
  }
}
const customer = new Customer("Alice");
customer.placeOrder(cart);
customer.printOrderHistory();

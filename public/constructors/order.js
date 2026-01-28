class Order {
  constructor(date, cart) {
    this.date = date;
    this.cart = cart;
  }
  printOrder() {
    const productLines = this.cart.items.map(
      (item) => `${item.product.title}: ${item.quantity}`,
    );
    return `
     Kuupäev: ${
       this.date
     } Hind kokku: ${this.cart.calculateTotal()} Tooted: ${productLines}
  `;
  }
}

export { Order };

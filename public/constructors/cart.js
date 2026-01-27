class Cart {
  constructor() {
    this.items = [];
  }

  //Võta kõik ostukorvi tooted
  getAllProducts() {
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
  }

  removeProduct(product, change) {
    const existing = this.items.find((item) => item.product.id === product.id);

    if (!existing) return;
    if (existing.quantity > 0) {
      existing.quantity -= change;
    }
    if (existing.quantity <= 0) {
      cart.deleteProduct(product);
    }
  }
  deleteProduct(product) {
    const existing = this.items.find((item) => item.product.id === product.id);
    // console.log(existing.quantity);

    this.items = this.items.filter((item) => item.product.id !== product.id);
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
  }

  get totalItems() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }
}

export { Cart };

// Loo ostukorv ja lisa tooted
export const cart = new Cart();

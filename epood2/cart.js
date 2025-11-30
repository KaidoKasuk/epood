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

export { Cart };

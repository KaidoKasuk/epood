class Cart {
  constructor() {
    this.items = [];
  }

  //Võta kõik ostukorvi tooted
  getAllProducts() {
    return this.items;
  }

  addProduct(product, quantity) {
    const existingItem = this.items.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({ product, quantity });
    }
  }

  removeQuantity() {
    const existingItem = this.items.find(
      (item) => item.product.id === product.id
    );
    if (existingItem.quantity > 0) {
      existingItem.quantity -= quantity;
    } else;
  }

  removeProduct(product, change) {
    const existing = this.items.find((item) => item.product.id === product.id);

    if (!existing) return;

    existing.quantity -= change;

    // eemaldab produkti täielikult (vana)
    // if (existing.quantity <= 0) {
    //   this.items = this.items.filter((item) => item.product.id !== product.id);
    // }
  }

  calculateTotal() {
    return this.items
      .reduce((sum, item) => sum + item.product.price * item.quantity, 0)
      .toFixed(2);
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

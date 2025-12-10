export class Product {
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

// console.log(laptop.describe());
// console.log(`allahindlusega: ${Product.discountedPrice(laptop.price, 10)}`);

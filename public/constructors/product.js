export class Product {
  constructor(id, title, price, category, description, image) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.category = category;
    this.description = description;
    this.image = image;
  }
  describe() {
    return this.title + " " + this.price + " " + this.category;
  }
  static discountedPrice(price, discount) {
    return (price - price * (discount / 100)).toFixed(2);
  }
}

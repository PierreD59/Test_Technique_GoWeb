class Product {
  id?: number;
  title: string;
  price: number;
  priceWithTVA: number;
  description: string;
  category: string;
  image: string;

  constructor(
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
  ) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.image = image;
    this.priceWithTVA = this.calculateTVA();
  }

  /**
   * Fonction qui permet de calculer la TVA en fonction du Prix du Produit.
   * @returns number
   */
  public calculateTVA(): number {
    if (this.price) {
      return Math.round(this.price * 120) / 100;
    } else {
      return 0;
    }
  }
}
export default Product;

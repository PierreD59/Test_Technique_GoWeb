import Product from "../models/Product";

export default class ProductService {
  public static async getAllProducts(): Promise<Product[]> {
    return await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .catch((error) => {
        throw error;
      });
  }
}

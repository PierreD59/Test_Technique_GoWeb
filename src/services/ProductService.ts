import Product from "../models/Product";

export default class ProductService {
  public static async getAllProducts(): Promise<Product[]> {
    return await fetch("http://localhost:3004/products")
      .then((res) => res.json())
      .catch((error) => {
        throw error;
      });
  }

  public static async getProductById(id: number): Promise<Product> {
    return await fetch(`http://localhost:3004/products/${id}`)
      .then((res) => res.json())
      .catch((error) => {
        throw error;
      });
  }
}

import Product from "../models/Product";

export default class ProductService {
  /**
   * Fonction qui permet d'afficher tout les produits
   * @returns Retourne tout les produits
   */
  public static async getAllProducts(): Promise<Product[]> {
    return await fetch("http://localhost:3004/products")
      .then((res) => res.json())
      .catch((error) => {
        throw error;
      });
  }
  /**
   * Fonction qui permet d'afficher un produit en fonction de son ID
   * @param id l'id est récupéré dans l'URL
   * @returns Retourne le produit en fonction de son ID
   */
  public static async getProductById(id: number): Promise<Product> {
    return await fetch(`http://localhost:3004/products/${id}`)
      .then((res) => res.json())
      .catch((error) => {
        throw error;
      });
  }

  /**
   * Permet de modifier le produit
   * @param product  Récupère les données du produit
   * @returns Récupère les données modifiées et les changent en BDD.
   */
  public static async updateProduct(product: Product): Promise<Product> {
    return await fetch(`http://localhost:3004/products/${product.id}`, {
      method: "PUT",
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .catch((error) => {
        throw error;
      });
  }
}

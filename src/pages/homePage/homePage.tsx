import { useState, useEffect } from "react";
import Product from "../../models/Product";
import ProductService from "../../services/ProductService";

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    ProductService.getAllProducts().then((allProducts) =>
      setProducts(allProducts)
    );
  }, []);
  return (
    <>
      <h1>HomePage</h1>
      <table>
        <thead>
          <tr>
            <th>Product name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Price(including VAT)</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            let productObject: Product = new Product(
              product.title,
              product.price,
              product.description,
              product.category,
              product.image
            );
            return (
              <tr key={index++}>
                <td>{productObject.title}</td>
                <td>{productObject.category}</td>
                <td>{productObject.price} €</td>
                <td>{productObject.priceWithTVA} €</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default HomePage;

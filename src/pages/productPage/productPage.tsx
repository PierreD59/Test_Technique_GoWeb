import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../models/Product";
import ProductService from "../../services/ProductService";

const ProductPage: React.FC = () => {
  const [product, setProduct] = useState<Product>();
  let { id } = useParams<string>();

  useEffect(() => {
    if (id) {
      ProductService.getProductById(+id).then((data) => setProduct(data));
    }
  }, [id]);

  // let productObject: Product = new Product(
  //   product.title,
  //   product.price,
  //   product.description,
  //   product.category,
  //   product.image
  // );

  return (
    <main>
      <p>{product?.title}</p>
      <p>{product?.category}</p>
      <p>{product?.price} €</p>
      <p>{product?.priceWithTVA} €</p>
      <img src={product?.image} alt={product?.title}></img>
      <p>{product?.description}</p>
    </main>
  );
};

export default ProductPage;

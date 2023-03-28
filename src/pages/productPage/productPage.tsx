import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PriceForm from "../../components/priceForm/priceForm";
import Product from "../../models/Product";
import ProductService from "../../services/ProductService";

const ProductPage: React.FC = () => {
  const [product, setProduct] = useState<Product>();
  let { id } = useParams<string>();

  useEffect(() => {
    if (id) {
      ProductService.getProductById(+id)
        .then(
          (data) =>
            (data = new Product(
              data.title,
              data.price,
              data.description,
              data.category,
              data.image
            ))
        )
        .then((data) => setProduct(data));
    }
  }, [id]);

  return (
    <main>
      <div className="productBlock">
        <div className="productTitle">
          <h1 className="center primaryTitleProduct primary">
            {product?.title}
          </h1>
        </div>
        <div className="productImage">
          <img src={product?.image} alt={product?.title}></img>
        </div>
        <div className="productContentBlock">
          <div className="productContent">
            <h2 className="titleCategory primary">Description</h2>
            <p className="justify contentProduct darkgray">
              {product?.description}
            </p>
          </div>
          <div className="productCategory">
            <h2 className="titleCategory primary">Category</h2>
            <p className="center categoryTags contentTag white bgSecondary">
              {product?.category}
            </p>
          </div>
        </div>
        <div className="productPriceBlock">
          <PriceForm product={product as Product} edit={true} />
        </div>
      </div>
    </main>
  );
};

export default ProductPage;

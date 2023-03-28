import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PriceForm from "../../components/priceForm/priceForm";
import Product from "../../models/Product";
import ProductService from "../../services/ProductService";

const ProductPage: React.FC = () => {
  const [product, setProduct] = useState<Product>();
  let { id } = useParams<string>();
  /**
   * Permet d'instancier le produit pour pouvoir afficher le prix avec la TVA d'appliqué
   */
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
          <Link to={"/"} title={`Permet un retour en arrière`}>
            <img
              src="../img/back_button.svg"
              alt="Icone permettant le retour en arrière"
            />
          </Link>
          <h1 className="center primaryTitleProduct primary">
            {product?.title}
          </h1>
          <div></div>
        </div>
        <div className="productImage">
          <img
            src={product?.image}
            alt={`Représente le produit : ${product?.title}`}
          ></img>
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

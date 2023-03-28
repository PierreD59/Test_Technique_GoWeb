import { useState, useEffect } from "react";
import Product from "../../models/Product";
import ProductService from "../../services/ProductService";
import { Link } from "react-router-dom";

const ProductTable: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    ProductService.getAllProducts().then((allProducts) =>
      setProducts(allProducts)
    );
  }, []);
  return (
    <div className="tableProduct">
      <div className="tr thead bgPrimary white theadTitle shadow">
        <div className="td left">Product name</div>
        <div className="td ce,ter">Category</div>
        <div className="td right">Price</div>
        <div className="td right">
          Price <span className="spanTVA">(including VAT)</span>
        </div>
      </div>
      {products.map((product, index) => {
        /**
         * Instancie un nouveau produit
         */
        let productObject: Product = new Product(
          product.title,
          product.price,
          product.description,
          product.category,
          product.image
        );
        return (
          <div className="tr bgWhite shadow" key={index++}>
            <div className="td contentTable" data-head="Product name">
              <Link to={`/product/${product.id}`}>
                {productObject.title.substring(0, 30) + "..."}
              </Link>
            </div>
            <div className="td categoryBlock contentTable" data-head="Category">
              <div className="center categoryTags contentTag white bgSecondary">
                {productObject.category}
              </div>
            </div>
            <div
              className="td contentPrice darkGray right contentTable"
              data-head="Price"
            >
              {productObject.price} €
            </div>
            <div
              className="td contentPrice darkGray right"
              data-head="Price (including VAT)"
            >
              {productObject.priceWithTVA} €
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductTable;

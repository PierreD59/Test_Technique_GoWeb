import { useState, useEffect } from "react";
import Product from "../../models/Product";
import ProductService from "../../services/ProductService";

const ProductTable: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    ProductService.getAllProducts().then((allProducts) =>
      setProducts(allProducts)
    );
  }, []);
  return (
    <div className="fake-table">
      <div className="tr thead bgPrimary white theadTitle shadow">
        <div className="td left">Product name</div>
        <div className="td ce,ter">Category</div>
        <div className="td right">Price</div>
        <div className="td right">
          Price <span className="spanTVA">(including VAT)</span>
        </div>
      </div>
      {products.map((product, index) => {
        let productObject: Product = new Product(
          product.title,
          product.price,
          product.description,
          product.category,
          product.image
        );
        return (
          <div className="tr bgWhite shadow" key={index++}>
            <div className="td contentTable darkGray left">
              {productObject.title}
            </div>
            <div className="td">
              <div className="center categoryTags contentTag white bgSecondary">
                {productObject.category}
              </div>
            </div>
            <div className="td contentPrice darkGray right">
              {productObject.price} €
            </div>
            <div className="td contentPrice darkGray right">
              {productObject.priceWithTVA} €
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductTable;

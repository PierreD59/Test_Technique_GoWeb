import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../../models/Product";
import ProductService from "../../services/ProductService";

type props = {
  product: Product;
  edit: boolean;
};

type champ = {
  value?: any;
  error?: string;
  isValid?: boolean;
};

type Form = {
  price: champ;
};

const PriceForm: React.FC<props> = ({ product, edit }) => {
  const [form, setForm] = useState<Form>({
    price: {
      value: product?.price,
      isValid: true,
    },
  });
  const redirection = useNavigate();

  /**
   * Stocke les modifications stockées dans le hook, dans la bonne variable.
   * @param event Se lance quand une modification est faite sur un champ.
   */
  const editProductForm = (event: React.ChangeEvent<any>) => {
    const scopeName: string = event.target.name;
    const scopeValue: string = event.target.value;
    const newScope: champ = { [scopeName]: { value: scopeValue } };
    setForm({ ...form, ...newScope });
  };

  /**
   * Prends les informations du produit reçu en paramètre et l'update, grâce aux informations stockées dans le hook. Une fois cela fait, les données sont envoyé en BDD.
   * @param event Se lance quand on clique sur le bouton submit.
   */
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    product.price = form.price.value;
    if (edit) editProduct();
  };

  /**
   * Permet de mettre à jour le produit.
   */
  const editProduct = () => {
    ProductService.updateProduct(product).then(() => redirection(`/`));
  };

  /**
   * @returns Fonction qui empêche de cliquer sur le bouton tant que les modifications ne sont pas faites.
   */
  const validate = () => {
    return form.price.value;
  };
  const isValid = validate();

  return (
    <form className="productPriceForm" onSubmit={submit}>
      <h2 className="titleCategory primary">Price</h2>
      <div className="productPrice contentPrice darkgray">
        <input
          type="number"
          name="price"
          value={form.price.value}
          onChange={editProductForm}
        />
        <p>
          <span className="spanPrice">Price</span> (including VAT)
          {` ${product?.priceWithTVA}`} €
        </p>
      </div>
      <input
        className={
          !isValid
            ? "bgDarkGray  white buttonText"
            : "bgPrimary white buttonText"
        }
        type="submit"
        disabled={!isValid}
        value="Update Product"
      />
    </form>
  );
};

export default PriceForm;

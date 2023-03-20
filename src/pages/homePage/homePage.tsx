import ProductTable from "../../components/productTable/productTable";

const HomePage: React.FC = () => {
  return (
    <main>
      <h1 className="titleProductManagement primary center">
        Products management
      </h1>
      <ProductTable />
    </main>
  );
};

export default HomePage;

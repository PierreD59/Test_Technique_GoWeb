import { RouteObject, useRoutes } from "react-router-dom";
import HomePage from "../pages/homePage/homePage";
import ProductPage from "../pages/productPage/productPage";

const Router: React.FC = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/product/:id",
      element: <ProductPage />,
    },
  ];
  return <>{useRoutes(routes)}</>;
};

export default Router;

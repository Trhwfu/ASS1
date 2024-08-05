import "./App.css";
import { useRoutes } from "react-router-dom";
import LayoutUser from "./layout/user";
import LayoutAdmin from "./layout/Admin";
import CartProvider from "./context/cartContext";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import ListProduct from "./components/ProductList";
import Detail from "./components/Detail";
import Cart from "./components/cart";
import ProductContext from "./context/productContext";
import ListProductAdmin from "./components/admin/productlistAdmin";
import AddProduct from "./components/admin/AddAdmin";
import EditProduct from "./components/admin/EditAdmin";
import CategoryContext from "./context/categoryContext";
import AddCategory from "./components/admin/AddCategory";
import EditCategory from "./components/admin/EditCategory";
import CategoryProductList from "./components/CategoryProductList";
import Login from "./components/acc/login";
import Register from "./components/acc/register";
import OrderConfirmation from "./components/OrderConfirmation";
import OrdersByEmail from "./components/OrdersByEmail";
import AdminOrders from "./components/admin/oders";

function App() {
  const routes = useRoutes([
    {
      path: "",
      element: (
        <ProductContext>
          <CategoryContext>
            <CartProvider>
              <LayoutUser />
            </CartProvider>
          </CategoryContext>
        </ProductContext>
      ),
      children: [
        { path: "", element: <Home /> },
        { path: "products", element: <ListProduct /> },
        { path: "product/:id", element: <Detail /> },
        { path: "cart", element: <Cart /> },
        // { path: 'search', element: <SearchResults /> },
        { path: "category/:id", element: <CategoryProductList /> },
        { path: "orderemail", element: <OrdersByEmail /> },
        { path: "order", element: <OrderConfirmation /> },
        { path: "checkout", element: <Checkout /> },
      ],
    },
    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> },
    {
      path: "admin",
      element: (
        <ProductContext>
          <CategoryContext>
            <LayoutAdmin />
          </CategoryContext>
        </ProductContext>
      ),
      children: [
        { path: "", element: <ListProductAdmin /> },
        { path: "add", element: <AddProduct /> },
        { path: "edit/:id", element: <EditProduct /> },
        { path: "category/edit/:id", element: <EditCategory /> },
        { path: "oders", element: <AdminOrders /> },
        { path: "category/add", element: <AddCategory /> },
      ],
    },
  ]);

  return routes;
}

export default App;

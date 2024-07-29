// import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import LayoutUser from './layout/user';
import LayoutAdmin from './layout/Admin';
import CartProvider from './context/cartContext';
import Checkout from './components/Checkout';
import Home from './components/Home';
import ListProduct from './components/ProductList';
import Detail from './components/Detail';
import Cart from './components/cart';
import ProductContext from './context/productContext';
import ListProductAdmin from './components/admin/productlistAdmin';
import AddProduct from './components/admin/AddAdmin';
import EditProduct from './components/admin/EditAdmin';
import CategoryContext from './context/categoryContext';
import AddCategory from './components/admin/AddCategory';
import EditCategory from './components/admin/EditCategory';


function App() {
  const routes = useRoutes([
    {
      path: '',
      element: (
        <CartProvider>
          <LayoutUser />
        </CartProvider>
      ),
      children: [
        { path: '', Component: Home },
        { path: 'products', Component: ListProduct },
        { path: 'product/:id', Component: Detail },
        { path: 'cart', Component: Cart },
        { path: 'checkout', element:<Checkout /> }
      ],
    },
    {
      path: 'admin',
      element: (
        <ProductContext>
          <CategoryContext>
            <LayoutAdmin />
          </CategoryContext>
        </ProductContext>
      ),
      children: [
           { path: '', element:<ListProductAdmin/> },
           { path: 'add', Component:AddProduct },
           { path: 'edit/:id', element:<EditProduct/> },
           { path: 'category/edit/:id', element:<EditCategory/> },
           { path: 'category/add',Component:AddCategory },
      ],
    },
  ]);

  return routes
}

export default App;

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Blog from "../Pages/Blog/Blog";
import Description from "../Pages/Description/Description";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";

const myPersonalRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/public.json')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/add-product",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: "/cart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/description/:id",
        element: <Description></Description>,
        loader: () => fetch('/public.json')
      }
    ],
  },
]);

export default myPersonalRoutes;

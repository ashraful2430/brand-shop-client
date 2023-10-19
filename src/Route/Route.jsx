import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Blog from "../Pages/Blog/Blog";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Lenovo from "../Pages/Lenovo/Lenovo";
import Asus from "../Pages/Asus/Asus";
import Acer from "../Pages/Acer/Acer";
import Apple from "../Pages/Apple/Apple";
import Samsung from "../Pages/Samsung/Samsung";
import Xiaomi from "../Pages/Xiaomi/Xiaomi";

const myPersonalRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

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
        path: "/lenovo",
        element: <Lenovo></Lenovo>,
      },
      {
        path: "/asus",
        element: <Asus></Asus>
      },
      {
        path: "/acer",
        element: <Acer></Acer>
      },
      {
        path: "/apple",
        element: <Apple></Apple>
      },
      {
        path: "/samsung",
        element: <Samsung></Samsung>
      },
      {
        path: "/xiaomi",
        element: <Xiaomi></Xiaomi>
      }
    ],
  },
]);

export default myPersonalRoutes;

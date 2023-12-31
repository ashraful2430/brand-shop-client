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
import UpdateDetails from "../Pages/UpdateDetails/UpdateDetails";
import Details from "../Pages/Details/Details";

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
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://b8a10-brandshop-server-side-ashraful2430.vercel.app/cart"
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/lenovo",
        element: <Lenovo></Lenovo>,
        loader: () =>
          fetch(
            "https://b8a10-brandshop-server-side-ashraful2430.vercel.app/brands"
          ),
      },
      {
        path: "/asus",
        element: <Asus></Asus>,
        loader: () =>
          fetch(
            "https://b8a10-brandshop-server-side-ashraful2430.vercel.app/brands"
          ),
      },
      {
        path: "/acer",
        element: <Acer></Acer>,
        loader: () =>
          fetch(
            "https://b8a10-brandshop-server-side-ashraful2430.vercel.app/brands"
          ),
      },
      {
        path: "/apple",
        element: <Apple></Apple>,
        loader: () =>
          fetch(
            "https://b8a10-brandshop-server-side-ashraful2430.vercel.app/brands"
          ),
      },
      {
        path: "/samsung",
        element: <Samsung></Samsung>,
        loader: () =>
          fetch(
            "https://b8a10-brandshop-server-side-ashraful2430.vercel.app/brands"
          ),
      },
      {
        path: "/xiaomi",
        element: <Xiaomi></Xiaomi>,
        loader: () =>
          fetch(
            "https://b8a10-brandshop-server-side-ashraful2430.vercel.app/brands"
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateDetails></UpdateDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b8a10-brandshop-server-side-ashraful2430.vercel.app/brands/${params.id}`
          ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://b8a10-brandshop-server-side-ashraful2430.vercel.app/brands"
          ),
      },
    ],
  },
]);

export default myPersonalRoutes;

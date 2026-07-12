import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Components/Home";
import ErrorPage from "../Components/ErrorPage";
import Apps from "../Pages/Apps";
import AppDetails from "../Pages/AppDetails/AppDetails";
import Authentication from "../Authentication/Authentication";
import Register from "../Authentication/forms/Register";
import Login from "../Authentication/forms/Login";
import PrivateRoute from "../Context/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/apps",
        Component: Apps,
        loader: () => fetch("AppStore.json"),
      },
        {
    path: '/appsDetails/:id',
    element:<PrivateRoute>
      <AppDetails></AppDetails>
    </PrivateRoute>,
    loader: () => fetch("/AppStore.json"),
  }
    ]
  },
  {
    path: "/authLayout",
    element: <Authentication></Authentication>,
    children: [
      {
        path: "/authLayout/register",
        Component: Register
      },
      {
        path: "/authLayout/login",
        Component: Login
      },
    ]
  },

])
export default router
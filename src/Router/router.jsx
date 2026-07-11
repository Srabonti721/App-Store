import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Components/Home";
import ErrorPage from "../Components/ErrorPage";
import Apps from "../Pages/Apps";
import AppDetails from "../Pages/AppDetails/AppDetails";

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
        Component: AppDetails,
        loader: () => fetch("/AppStore.json"),
      }
    ]
  },
])
export default router
import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Components/Home";
import ErrorPage from "../Components/ErrorPage";

 const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage>,
   Component:Root,
   children:[
    {
      index:true,
      Component:Home
    }
   ]
  },
 ])
 export default router
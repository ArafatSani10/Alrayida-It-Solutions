import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import About from "../pages/About/About";

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<Error></Error>,
      element: <Mainlayout></Mainlayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/about',
          element:<About></About>
        },
      ]
    },
  ]);

  export default router;
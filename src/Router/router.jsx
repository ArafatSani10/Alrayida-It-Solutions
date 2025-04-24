import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import About from "../pages/About/About";
import WebDevelopment from "../pages/Services/WebDevelopment/WebDevelopment";
import Figma from "../pages/Services/UiuX/Ui/Figma";

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

        // dropdown for service page
        {
          path:'/service/web',
          element:<WebDevelopment></WebDevelopment>
        },

        {
          path:'/service/uiux',
          element:<Figma></Figma>,
        },
      ]
    },
  ]);

  export default router;
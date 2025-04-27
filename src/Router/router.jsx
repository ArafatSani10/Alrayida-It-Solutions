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
import GraphicsDesigner from "../pages/Services/GraphicsDesign/GrapicsDesigner/GraphicsDesigner";
import DigitalMarketer from "../pages/Services/DigitalMarketing/DigitalMarketer/DigitalMarketer";
import CrmandSaas from "../pages/Services/Crm/CrmandSass/CrmandSaas";
import VideoProductions from "../pages/Services/VideoProduction/VideoProductions/VideoProductions";

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

        {
          path:'/service/GraphicsDesign',
          element:<GraphicsDesigner></GraphicsDesigner>
        },
        {
          path:'/service/digitalMarketing',
          element:<DigitalMarketer></DigitalMarketer>
        },
        {
          path:'/service/crm',
          element:<CrmandSaas></CrmandSaas>
        },
        {
          path:'/service/video',
          element:<VideoProductions></VideoProductions>
        },

      ]
    },
  ]);

  export default router;
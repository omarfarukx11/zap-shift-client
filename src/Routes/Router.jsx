import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    errorElement:<p>404 error</p>,
    hydrateFallbackElement:<p>Loading</p>,
    children:[
      {
        index:true,
        Component:Home
      }
    ]
  },
]);
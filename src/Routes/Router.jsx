import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";


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
      },
      {
        path:'/coverage',
        loader:()=> fetch('/serviceCenter.json').then(res => res.json()),
        Component:Coverage,
        
      }
    ]
  },
]);
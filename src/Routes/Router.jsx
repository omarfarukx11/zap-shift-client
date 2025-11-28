import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";


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
  {
    path:'/',
    Component:AuthLayout,
    children:[
      {
        path:'/login',
        Component:Login,
      },
      {
        path:'/register',
        Component:Register,
      }
    ]
  }
]);
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivetRouter from "./PrivetRouter";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/SendParcel/SendParcel";
import DashboardLayout from "../Layout/DashboardLayout";
import Payment from "../pages/Dashboard/Payment/Payment";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";


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
        path:'/rider',
        element:<PrivetRouter>
          <Rider></Rider>
        </PrivetRouter>
      },
      {
        path:"/sendParcel",
        element:
        <PrivetRouter>
          <SendParcel></SendParcel>
        </PrivetRouter>,
        loader:()=> fetch('/serviceCenter.json').then(res => res.json()),
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
  },
  {
    path:'/dashboard',
    element:<PrivetRouter><DashboardLayout></DashboardLayout></PrivetRouter>,
    children:[
      {
        path:"/dashboard/myParcels",
        Component:MyParcels
      },
      {
        path:"/dashboard/payment/:id",
        Component:Payment
      },
      
    ]
  }
]);
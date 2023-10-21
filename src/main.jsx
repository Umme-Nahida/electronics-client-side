import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddProduct from './component/AddProduct';
import MyCart from './component/MyCart';
import Login from './component/Login';
import Root from './component/Root/Root';
import Register from './component/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRout from './component/PrivateRoute/PrivateRoute';
import UpdateProduct from './component/UpdateProduct';
import Home from './component/Home/Home';
import BrandProduct from './component/Brand/BrandProduct';
import Details from './component/Details';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:3000/allBrands')
      },
      {
        path: '/addproduct',
        element: <PrivateRout><AddProduct></AddProduct></PrivateRout>
      },
      {
        path: '/brandproducts/:id',
        element: <BrandProduct></BrandProduct>,
        loader: ({params})=> fetch(`http://localhost:3000/brands/${params?.id}`)
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({params})=> fetch(`http://localhost:3000/details/${params?.id}`)
      },
      {
        path: '/updateproduct/:id',
        element: <PrivateRout><UpdateProduct></UpdateProduct></PrivateRout>,
        loader:({params})=>fetch(`http://localhost:3000/details/${params.id}`)
      },
      {
        path: '/mycart/:email',
        element: <MyCart></MyCart>,
        loader:async({params})=> await fetch(`http://localhost:3000/getMyCart/${params?.email}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

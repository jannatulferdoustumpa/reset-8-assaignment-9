import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home.jsx';
import Login from './component/Login/Login.jsx'
import Root from './component/Root.jsx';
import Register from './component/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement : <ErrorPage />
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/login',
        element :<Login></Login>
      },
      {
        path : '/register',
        element : <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

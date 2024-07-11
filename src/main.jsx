import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from "./pages/login"
import RegisterPage from "./pages/register"
import CardProduct from './pages/product'
import NotFoundPage from './pages/404'


const router = createBrowserRouter([
  {
    path:"/login",
    element: <LoginPage />
  },
  {
    path:"/register",
    element: <RegisterPage />
  },
  {
    path: "/products",
    element: <CardProduct />  // Redirect to 404 page if route doesn't match any of the defined paths. This can be replaced with a custom 404 page.
  },
  {
    path:"/dashboard",
    element: <NotFoundPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)



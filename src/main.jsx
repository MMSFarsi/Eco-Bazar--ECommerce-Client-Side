
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Shop from './pages/Shop';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Pages from './pages/Pages';
import Contact from './pages/Contact';
import About from './pages/About';
import ProductDetails from './Components/ProductDetails';





const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch("../featureProduct.json")
      },
      {
        path:"/product/:id",
        element:<ProductDetails></ProductDetails>,
        loader:()=>fetch("../featureProduct.json")
      },
      {
        path:"/shop",
        element:<Shop></Shop>
      },
      {
        path:"/pages",
        element:<Pages></Pages>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path:"/about-us",
        element:<About></About>
      },
      {
        path:"/contact-us",
        element:<Contact></Contact>
      }
    ]

  },
 
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

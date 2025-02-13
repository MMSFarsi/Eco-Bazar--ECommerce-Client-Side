
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
import Login from './pages/AuthPage/Login';
import Register from './pages/AuthPage/Register';
import AuthProvider from './provider/AuthProvider';
import PrivateRoute from './PrivateRoute';
import AddProduct from './pages/AddProduct';
import ScrollToTop from './Components/Utils/ScrollToTop';
import Error from './Components/Error';
import Cart from './pages/Cart';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <MainLayout />
      </>
    ),
    errorElement:<Error></Error>,

    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch("http://localhost:5000/products")
      },
      {
        path:"/product/:id",
        element:<ProductDetails></ProductDetails>,
        loader:()=>fetch("http://localhost:5000/products")
      },
      {
        path:"/shop",
        element:<Shop></Shop>,
        loader:()=>fetch("http://localhost:5000/products")
      },
      {
        path:"/addProduct",
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path:"/cart",
        element:<PrivateRoute><Cart></Cart></PrivateRoute>
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
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/register",
        element: <Register></Register>
      },
    ]

  },
 
]);

createRoot(document.getElementById('root')).render(


 <QueryClientProvider client={queryClient}>
 <AuthProvider> <RouterProvider router={router} /></AuthProvider>
</QueryClientProvider>
)

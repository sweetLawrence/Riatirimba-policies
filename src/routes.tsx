import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CategoryPage from './components/CategoryPage';
import QuarterSelector from './pages/QuarterSelector';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
       {
        path: '/',
        element: <QuarterSelector />,
      },
      {
        path: 'home/:quarter',
        element: <Home />,
      },
      // {
      //   path: 'category/:categoryPath',   // 👈 Dynamic route for category
      //   element: <CategoryPage />,
      // },
      //  {
      //   path: 'quarter/:quarter/category/:categoryPath',
      //   element: <CategoryPage />,
      // },
       {
        path: '/category/:quarter/:categoryPath',
        element: <CategoryPage />,
      },
      
     
    ],
  },
]);

export default router;

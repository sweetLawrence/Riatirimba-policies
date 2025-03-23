import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CategoryPage from './components/CategoryPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'category/:categoryPath',   // 👈 Dynamic route for category
        element: <CategoryPage />,
      },
      
     
    ],
  },
]);

export default router;

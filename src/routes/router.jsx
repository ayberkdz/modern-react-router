import { createBrowserRouter } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import MainLayout from '../layouts/MainLayout';
import AboutPage from '../pages/AboutPage';
import AboutSettingPage from '../pages/AboutSettingPage';
import AdminHomePage from '../pages/AdminHomePage';
import HomePage from '../pages/HomePage';

const router = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout />,
      children: [
         {
            index: true,
            element: <HomePage />,
         },
         { path: 'about', element: <AboutPage /> },
      ],
   },
   {
      path: '/admin',
      element: <AdminLayout />,
      children: [
         { index: true, element: <AdminHomePage /> },
         { path: 'setting', element: <AboutSettingPage /> },
      ],
   },
]);

export default router;
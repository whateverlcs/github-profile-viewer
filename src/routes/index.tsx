import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/layouts/RootLayout';
import { GithubViewer } from '@/pages/GithubViewer/GithubViewer';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <GithubViewer />,
      }
    ],
  },
]);

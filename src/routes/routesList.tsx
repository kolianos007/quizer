import React from 'react';
import Home from '../pages/Home/Home';

const publicRoutes = [
  {
    path: '/',
    element: <Home />,
  },
];
const privateRoutes = [
  {
    path: '/',
    element: <Home />,
  },
];

export { publicRoutes, privateRoutes };

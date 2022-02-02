import { FC } from 'react';
import { useRoutes } from 'react-router-dom';

import * as routes from './routesList';

const AppRouter: FC = () => {
  const auth = false;

  return auth ? (
    useRoutes(routes.privateRoutes)
  ) : (
    useRoutes(routes.publicRoutes)
  );
};

export default AppRouter;

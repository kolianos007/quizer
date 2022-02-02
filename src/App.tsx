import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRouter from './routes/AppRouter';
import './App.css';

const App: FC = () => (
  <Router>
    <AppRouter />
  </Router>
);

export default App;

import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRouter from './routes/AppRouter';
import './App.sass';

const App: FC = () => (
  <div className="app">
    <Router>
      <AppRouter />
    </Router>
  </div>
);

export default App;

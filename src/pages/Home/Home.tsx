import React, { FC } from 'react';

import './Home.sass';

const menuItem = ['Choose a test', 'Random test', 'Create a test'];

const Home: FC = () => (
  <div className="home home__bg g_h100vh d-flex">
    <div className="container-fluid align-self-center g_mt-90">
      <div className="centered-block d-flex flex-column justify-content-center align-items-center align-self-center">
        <div className="g_title">
          Quizer
        </div>
        <ul className="g_menu">
          {menuItem.map((item) => (
            <li className="g_menu__item">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Home;

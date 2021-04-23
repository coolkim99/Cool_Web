import React from 'react';
import { Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import GuestPage from './pages/GuestPage';

function App() {
  return (
    <>
    <Route component={MainPage} path={['/']} exact />
    <Route component={AboutPage} path={['/about']}/>
    <Route component={PortfolioPage} path={['/portfolio']} />
    <Route component={BlogPage} path={['/blog']} />
    <Route component={GuestPage} path={['/guestbook']} />
    </>
  );
}

export default App;

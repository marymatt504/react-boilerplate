/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import RestaurantList from 'containers/RestaurantList/Loadable';
import NavBar from '../../components/NavBar';
import RestaurantProfile from '../../components/RestaurantProfile';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Router>
        <div>
          <Route path="/" component={NavBar} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/restaurants" component={RestaurantList} />

          <Route path="/restaurants/:id" component={RestaurantProfile} />
          {/* fall back route ---> <Route component={NotFoundPage} /> */}
        </div>
      </Router>
      <GlobalStyle />
    </div>
  );
}

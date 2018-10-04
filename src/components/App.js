import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './LandingPage/landing_page';
import Menu from './Menu/hamburger_menu';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Menu />
          <Switch>
            <Route path="/" />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

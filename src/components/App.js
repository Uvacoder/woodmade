import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './LandingPage/landing_page';
import Menu from './Menu/hamburger_menu';
import Gallery from './Gallery/wood_gallery';
import Contact from './Contact/contact_form';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Menu />
          <Contact />
          <Switch>
            {/* <Route path="/contact" component={Contact} /> */}
            <Route path="/gallery" component={Gallery} />
            <Route path="/" component={Landing} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

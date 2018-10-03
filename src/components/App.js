import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './LandingPage/landing_page';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" component={Landing} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

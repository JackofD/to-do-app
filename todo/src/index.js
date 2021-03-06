import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './css/main.css';

import App from './components/App';
import Wrong from './components/Wrong';

const Root = () => {
  return(
    <BrowserRouter>
        <Switch>
          {/* The switch only renders the first matching path - so be careful about the order */}
          <Route exact path="/" component={App} />
          <Route component={Wrong}/>
        </Switch>
    </BrowserRouter>
  )
}

render(<Root />, document.querySelector("#main"));
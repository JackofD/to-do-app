import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Wrong from './components/Wrong';

const Root = () => {
  return(
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route component={Wrong}/>
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.querySelector("#main"));
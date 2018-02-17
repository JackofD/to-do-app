import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import App from './components/App';
import Wrong from './components/Wrong';

const Root = () => {
		return(
			<BrowserRouter>
				<div>
				  <Match exactly pattern="/" component={App} />
				  <Miss component={Wrong}/>
				</div>
			</BrowserRouter>
		)	
}

render(<Root />, document.querySelector("#main"));
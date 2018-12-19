import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router';

import Home from './home/home';

const App = () => {
	return (
		<Switch>
			<Route path="/home" component={Home} />
			<Redirect to="/home" />
		</Switch>
	);
};

export default App;

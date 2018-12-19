import * as React from 'react';
import { Route, routerRedux } from 'dva/router';
import H from 'history';
import App from './pages/app';

const { ConnectedRouter } = routerRedux;

const RouterConfig = ({ history }: { history: H.History }) => {
	return (
		<ConnectedRouter history={history}>
			<Route path="/" component={App} />
		</ConnectedRouter>
	);
};

export default RouterConfig;

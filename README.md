# 搭建 dva + typescript 开发环境

## 1. 配置react + typescript
参考我的另一个demo: [react-demo-ts](https://github.com/minteliuwm/react-demo-ts)

## 2. 引入dva
```
npm i @types/dva --save-dev
```

## 3. 新建router.tsx
```
import * as React from 'react';
import { routerRedux, Route } from 'dva/router';
import App from './pages/app';
import H from 'history';

const { ConnectedRouter } = routerRedux;

const RouterConfig = ({ history }: { history: H.History }) => {
	return (
		<ConnectedRouter history={history}>
			<Route path="/" component={App} />
		</ConnectedRouter>
	);
}

export default RouterConfig;
```

## 4. 修改main.tsx
```
import dva from 'dva';
import './scss/index.scss';

const app = dva({
	onError: () => { }
});

app.router(require('./router').default);

app.start("#app");
```

## 5. 启动
```
npm run dev
```

import React from 'react';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import {hydrateRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";

const root = hydrateRoot(
	document.getElementById('root'),
	<BrowserRouter>
		<App/>
	</BrowserRouter>
);
// const root = createRoot(document.getElementById('root'))
// root.render(
// 	<App />
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

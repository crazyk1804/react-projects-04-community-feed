import path from 'path';
import fs from 'fs';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';

import App from '../src/containers/App';
import {Helmet} from "react-helmet";

const PORT = 8080;
const app = express();

// 책에서는 static 설정이 제외되어 있었고
// 모든 url에 대해서 동일한 렌더링울 해주는 소스로 되어있어
// 정상 동작하지 않는다.
// static 설정을 추가하고 url패턴을 변경했다
app.use(express.static('./build'));
// app.get('/', (req, res) => {

app.get('/*', (req, res) => {
	const context = {};
	const app = ReactDOMServer.renderToString(
		<StaticRouter location={req.url} context={context}>
			<App/>
		</StaticRouter>
	);
	const helmet = Helmet.renderStatic()

	const indexFile = path.resolve('./build/index.html');
	fs.readFile(indexFile, 'utf8', (err, data) => {
		if(err) {
			console.error('Something went wrong: ', err);
			return res.status(500).send('Oops, better luck next time!');
		}

		data = data.replace('<div id="root"></div>', `<div id="root">${app}</div>`);
		data = data.replace(
			'<meta name="helmet"/>',
			`${ helmet.title.toString() }${ helmet.meta.toString() }`
		);
		return res.send(data);
	})
});

app.listen(PORT, () => {
	console.log(`Server-Side Rendered application running on port ${PORT}`);
});
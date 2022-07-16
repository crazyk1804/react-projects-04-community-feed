import React, {Component} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Header from '../components/Header/Header';
import Feed from './Feed';
import {BrowserRouter, Route, Switch } from "react-router-dom";
import Question from "./Question";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

/**
 * 지금은 리액트 라우터 6이 최신이지만 예제에서는 5를 사용하고 있고
 * 마침 지금 진행해야 하는 프로젝트가 익스플로러 지원이라 마침 5를 사용해야 하니
 * 5로 셋팅하고 진행한다
 */
class App extends Component {
	render() {
		return (
			<>
				<GlobalStyle/>
				<AppWrapper>
					<Header/>
					{/*<BrowserRouter>*/}
						<Switch>
							<Route path="/" component={Feed} exact/>
							<Route path="/questions/:id" component={Question}/>
							<Route path="/questions" component={Feed}/>
						</Switch>
					{/*</BrowserRouter>*/}
					{/*<Feed/>*/}
				</AppWrapper>
			</>
		);
	}
}

export default App;

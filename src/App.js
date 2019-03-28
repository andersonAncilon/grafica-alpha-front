import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import Home from './views/home/Home';
import Order from './views/order/Order';
import NavBar from './components/containers/nav-bar/NavBar';
import NotFound from './views/not-found/NotFound';

import { NavBarConfig } from './consts/NavBarConfig';
import { IsLogged } from './helpers/AuthController';


class App extends Component {
	render() {
		return (
			<Router>
				<NavBar navBarConfig={NavBarConfig} />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/pedidos' exact component={Order} />
					<Route path='*' exact component={NotFound} />
				</Switch>
			</Router>
		);
	}
}

export default App;

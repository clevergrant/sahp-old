import React, { Component } from 'react';

import Navigation from './Navigation/Navigation';

import logo from './logo.svg';
import './Sahp.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navigation />
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to Sahp</h2>
				</div>
				<p className="App-intro">
					I'm really cool
				</p>
			</div>
		);
	}
}

export default App;
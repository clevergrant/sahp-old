import React, { Component } from 'react';

import Navigation from './Navigation/Navigation';

import logo from './logo-spin.svg';
import './Sahp.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			expanded: true
		}

		this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
	}

	handleHamburgerClick() {
		this.state.expanded ? this.setState({
			expanded: false
		}) : this.setState({
			expanded: true
		});
	}

	render() {
		return (
			<div className="App">
				<Navigation expanded={this.state.expanded} onHamburgerClick={this.handleHamburgerClick} />
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
import React, { Component } from 'react';

// Database Tools

import Navigation from './Navigation/Navigation';

import logo from './logo-spin.svg';
import './Sahp.css';
import Util from './Util';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			expanded: false
		}

		this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
		this.handleFileSelect = this.handleFileSelect.bind(this);
	}

	handleHamburgerClick() {
		this.state.expanded ? this.setState({
			expanded: false
		}) : this.setState({
			expanded: true
		});
	}

	handleFileSelect() {
		const json = {
			"key": "Test",
			"values": [
				{
					"innerText": "Home",
					"linkHref": "/"
				}
			]
		};

		getJSON("localhost:3001/Navigations/Secondary", response => console.log(response));
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
				<button onClick={this.handleFileSelect}>Click Me</button>
			</div>
		);
	}
}

export default App;

function getJSON(url, callback) {
	var request = new XMLHttpRequest();
	request.open('GET', url, true);

	request.onload = function () {
		if (request.status >= 200 && request.status < 400) {
			// Success!
			//var data = JSON.parse(request.responseText);
			callback(request.responseText);
		} else {
			// We reached our target server, but it returned an error
			callback(request.status + ": " + request.statusText);
		}
	};

	request.onerror = err => {
		// There was a connection error of some sort
		callback(err);
	};

	request.send();
}
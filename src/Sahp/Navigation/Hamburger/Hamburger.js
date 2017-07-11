import React, { Component } from 'react';
import MaterialIcon from 'react-google-material-icons'

import './Hamburger.css';

class Hamburger extends Component {
	render() {
		return (
			<button onClick={this.props.onClick} className="HamburgerButton">
				<MaterialIcon icon="menu" className="Hamburger" color={this.props.color || "#ccc"} size={this.props.size || 30} />
			</button>
		);
	}
}

export default Hamburger;
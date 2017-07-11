import React, { Component } from 'react';

import './NavLink.css';

class NavLink extends Component {
	render() {
		return (
			<li><a href={this.props.link} className="NavLink">{this.props.value}</a></li>
		);
	}
}

export default NavLink;
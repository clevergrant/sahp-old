import React, { Component } from 'react';

import './NavItem.css';

class NavItem extends Component {
	render() {
		return (
			<li className="NavItem" >{this.props.children}</li>
		);
	}
}

export default NavItem;
import React, { Component } from 'react';

import NavItem from './NavItem/NavItem';
import NavLink from './NavLink/NavLink';
import Hamburger from './Hamburger/Hamburger';

import './Navigation.css';

class Navigation extends Component {
	render() {

		const classes = [
			"Navigation",
			this.props.expanded ? "expanded" : ""
		]

		const NavHead = this.props.isLoggedIn ? <NavItem> "Welcome, " + this.props.user.name</NavItem> : "";

		return (
			<div className={classes.join(" ")}>
				<ul className="NavContainer">
					{NavHead}
					<NavLink value="Home" link="/" />
				</ul>
				<Hamburger color="white" onClick={this.props.onHamburgerClick} />
			</div>
		);
	}
}

export default Navigation;
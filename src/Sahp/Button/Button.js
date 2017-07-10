import React, { Component } from 'react';

import './Button.css';

class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button className="Button">
                {this.props.children}
            </button>
        );
    }
}

export default Button;
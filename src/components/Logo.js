import React, { Component } from 'react';
import './Logo.css';
import logo from '../images/logo.svg'

class Logo extends Component {
    render() {
        return (
            <img className="logo" src={logo} />
        );
    }
}

export default Logo;
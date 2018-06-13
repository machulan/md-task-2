import React, { Component } from 'react';
import './Cover.css';
import Logo from './Logo';
import Header from './Header';


class Cover extends Component {
    render() {
        return (
            <div className="cover">
                <Logo/>
                <Header/>
            </div>
        );
    }
}

export default Cover;
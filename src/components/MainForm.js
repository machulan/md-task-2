import React, { Component } from 'react';
import './MainForm.css';
import Button from './Button';

class MainForm extends Component {
    render() {
        return (
            <form className="main">
                <input className="input" placeholder="Username" />
                <Button />
            </form>
        );
    }
}

export default MainForm;
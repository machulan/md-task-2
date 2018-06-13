import React, { Component } from 'react';
import './App.css';
import Cover from './Cover';
import MainForm from './MainForm';

class App extends Component {
    render() {
        return (
            <div className="app" >
                <Cover />
                <MainForm />
            </div>
        );
    }
}

export default App;
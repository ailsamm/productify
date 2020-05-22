import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './LandingPage.css';

export default class LandingPage extends Component {
    render() {
        return (
            <div className="landingPage">
                <p>meet</p>
                <h1 className="landingPage_title">PRODUCTIFY</h1>
                <p>your new favorite tool for organizing projects and increasing productivity</p>
                <NavLink to="/about" className="button landingPage_button">LEARN MORE</NavLink>
            </div>
        )
    }
}
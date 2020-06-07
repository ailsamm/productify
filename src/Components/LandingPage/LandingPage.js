import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './LandingPage.css';

export default class LandingPage extends Component {
    
    render() {
        return (
            <div className="landingPage centeredContent">
                <p className="landingPage__meet">meet</p>
                <h1 className="landingPage__title productifyGradient">PRODUCTIFY</h1>
                <p className="landingPage__description">your new favorite tool for organizing projects and increasing productivity</p>
                <NavLink to="/about" className="button landingPage__learnMorebutton">LEARN MORE</NavLink>
            </div>
        );
    }
}
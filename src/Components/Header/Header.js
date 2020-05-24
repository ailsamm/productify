import React, { Component } from 'react';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {

    getUserInitials = () => {
        const { firstName, lastName } = this.props.user;
        const initials = firstName.charAt(0) + lastName.charAt(0);
        return initials;
    }

    getLinks = () => {
        if (this.props.loggedIn){
            return (
                <div className="header__buttons">
                    <div className="header__avatar">
                            <span className="header__avatar__initials">{this.getUserInitials()}</span>
                    </div>
                </div>
            )
        }
        return (
            <div className="header__buttons">
                <NavLink to="/signup" className="button header__signUp">sign up</NavLink>
                <NavLink to="/login" className="button header__logIn">log in</NavLink>
            </div>
        )
    }

    render(){
        return(
            <div className="header">
                <h1 className="logo"><NavLink className="header__productify" to="/">PRODUCTIFY <FontAwesomeIcon icon={faRocket}/></NavLink></h1>
                {this.getLinks()}
            </div>
        )
    }
}
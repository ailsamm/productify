import React, { Component } from 'react';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import UserAvatar from '../UserAvatar/UserAvatar';
import ProductifyContext from '../../ProductifyContext';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {

    static contextType = ProductifyContext;

    getLinks = () => {
        if (this.context.loggedInUser !== null){
            return <UserAvatar 
                userId={this.context.loggedInUser} 
                class={"headerAvatar"}
            />
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
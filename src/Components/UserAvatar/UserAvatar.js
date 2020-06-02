import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ProductifyContext from '../../ProductifyContext';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './UserAvatar.css';

export default class UserAvatar extends Component {

    static contextType = ProductifyContext;

    constructor(props){
        super(props);
        this.state = {
            anchorEl: false,
            open: false
        }
    }
      
    handleClick = (e) => {
        this.setState({
            anchorEl: e.currentTarget
        })
    };
  
    handleClose = () => {
        this.setState({
            anchorEl: null
        })
    };

    handleLogOut = () => {
        this.context.onSignOutUser();
        this.handleClose();
    }

    getUserInitials = () => {
        const user = this.context.usersInfo.find(user => user.id === this.context.loggedInUser) || {};
        const firstName = user.first_name || "";
        const lastName = user.last_name || "";
        const initials = firstName.charAt(0) + lastName.charAt(0);
        return initials;
    }
    
    render() {
    return (
        <div className="header__buttons">
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                <div className="userAvatar productifyGradient">
                    <span className="userAvatar__initials">{this.getUserInitials()}</span>
                </div>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={this.state.anchorEl}
                className="userAvatar__menu"
                keepMounted
                open={Boolean(this.state.anchorEl)}
                onClose={this.handleClose}
            >
            <NavLink to="/profile" className="userAvatar__link">
                <MenuItem onClick={this.handleClose}>My Profile</MenuItem>
            </NavLink>
            <NavLink to="/projects" className="userAvatar__link">
                <MenuItem onClick={this.handleClose}>Projects</MenuItem>
            </NavLink>
            <NavLink to="/" className="userAvatar__link">
                <MenuItem onClick={this.handleLogOut}>Sign out</MenuItem>
            </NavLink>
            </Menu>
        </div>
        )
    }
}


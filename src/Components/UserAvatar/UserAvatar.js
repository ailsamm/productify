import React, { Component } from 'react';
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
        this.props.history.push("/");
    }

    getUserInitials = () => {
        const { firstName, lastName } = this.context.loggedInUser;
        const initials = firstName.charAt(0) + lastName.charAt(0);
        return initials;
    }
    
    render() {
    return (
        <div className="header__buttons">
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                <div className="userAvatar">
                    <span className="userAvatar__initials">{this.getUserInitials()}</span>
                </div>
            </Button>
            <Menu
            id="simple-menu"
            anchorEl={this.state.anchorEl}
            keepMounted
            open={Boolean(this.state.anchorEl)}
            onClose={this.handleClose}
            >
            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
            <MenuItem onClick={this.handleClose}>My team</MenuItem>
            <MenuItem onClick={this.handleLogOut}>Logout</MenuItem>
            </Menu>
        </div>
        )
    }
}


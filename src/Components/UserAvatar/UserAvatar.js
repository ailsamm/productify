import React, { Component } from 'react';
import ProductifyContext from '../../ProductifyContext';
import './UserAvatar.css';

export default class UserAvatar extends Component {

    static contextType = ProductifyContext;

    getUserInitials = () => {
        const { firstName, lastName } = this.context.loggedInUser;
        const initials = firstName.charAt(0) + lastName.charAt(0);
        return initials;
    }

    render() {
        return (
            <div className="header__buttons">
                <div className="userAvatar">
                        <span className="userAvatar__initials">{this.getUserInitials()}</span>
                </div>
            </div>
        )
    }
}

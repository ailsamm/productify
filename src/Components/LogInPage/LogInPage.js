import React, { Component } from 'react';
import './LogInPage.css';

export default class LogInPage extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted!")
    }

    render(){
        return (
            <div className="logIn centeredContent">
                <form className="logIn__form">
                    <label htmlFor="logIn__email">email address:</label>
                    <input name="logIn__email" id="logIn__email" placeholder="ada.lovelace@gmail.com" type="text"></input>
                    <label htmlFor="logIn__password">password:</label>
                    <input name="logIn__password" id="logIn__password" placeholder="************" type="password"></input>
                    <button type="submit" onClick={this.handleSubmit} className="button logIn__submitButton">sign in</button>
                </form>
            </div>
        )
    }
}
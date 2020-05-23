import React, { Component } from 'react';
import './SignUpPage.css';

export default class SignUpPage extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted!")
    }

    render(){
        return (
            <div className="signUp centeredContent">
                <form className="signUp__form">
                    <label htmlFor="signUp__firstName">first name:</label>
                    <input name="signUp__firstName" placeholder="Ada" id="signUp__firstName" type="text"></input>
                    <label htmlFor="signUp__lastName">last name:</label>
                    <input name="signUp__lastName" id="signUp__lastName" placeholder="Lovelace" type="text"></input>
                    <label htmlFor="signUp__job">job title:</label>
                    <input name="signUp__job" id="signUp__job" placeholder="Software developer" type="text"></input>
                    <label htmlFor="signUp__email">email address:</label>
                    <input name="signUp__email" id="signUp__email" placeholder="ada.lovelace@gmail.com" type="text"></input>
                    <label htmlFor="signUp__password">password:</label>
                    <input name="signUp__password" id="signUp__password" placeholder="************" type="password"></input>
                    <label htmlFor="signUp__passwordRepeat">repeat password:</label>
                    <input name="signUp__passwordRepeat" id="signUp__passwordRepeat" placeholder="************" type="password"></input>
                    <button type="submit" onClick={this.handleSubmit} className="button signUp__submitButton">submit</button>
                </form>
            </div>
        )
    }
}
import React, { Component } from 'react';
import ValidationError from '../ValidationError/ValidationError';
import './LogInPage.css';

export default class LogInPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: {
                touched: false,
                value: "",
            },
            password: {
                touched: false,
                value: "",
            }
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted!")
    }

    updateEmail = (value) => {
        this.setState({
            ...this.state,
            email: {
                touched: true,
                value
            }
        })
    }

    updatePassword = (value) => {
        this.setState({
            ...this.state,
            password: {
                touched: true,
                value
            }
        })
    }

    validateEmail(){
        const isValid = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email.value);
        if (!isValid) {
            return "Please ensure that the email address entered is valid."
        }
    }

    validatePassword(){
        if (this.state.password.value.length < 1) {
            return "Please enter a password."
        }
    }

    render(){
        return (
            <div className="logIn centeredContent">
                <form className="logIn__form">
                    <label htmlFor="logIn__email">email address:</label>
                    <input name="logIn__email" 
                        id="logIn__email" 
                        placeholder="ada.lovelace@gmail.com" 
                        onChange={e => this.updateEmail(e.target.value)}
                        type="text">
                    </input>
                    {this.state.email.touched && <ValidationError message={this.validateEmail()}/>}
                    <label htmlFor="logIn__password">password:</label>
                    <input name="logIn__password" 
                        id="logIn__password" 
                        placeholder="************" 
                        onChange={e => this.updatePassword(e.target.value)}
                        type="password">
                    </input>
                    {this.state.password.touched && <ValidationError message={this.validatePassword()}/>}
                    <button type="submit" onClick={this.handleSubmit} className="button logIn__submitButton">sign in</button>
                </form>
            </div>
        )
    }
}
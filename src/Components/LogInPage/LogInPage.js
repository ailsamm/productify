import React, { Component } from 'react';
import ValidationError from '../ValidationError/ValidationError';
import ProductifyContext from '../../ProductifyContext';
import './LogInPage.css';

export default class LogInPage extends Component {

    static contextType = ProductifyContext;

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

    handleLogInAttempt = (e) => {
        e.preventDefault();
        const context = this.context;
        const user = context.usersLogin.find(user => user.emailAddress === this.state.email.value);
        if (user){
            console.log("FOUND EMAIL")
            if (user.password === this.state.password.value){
                console.log("LOGGING IN!")
            }
            else {
                console.log("PASSWORD DOESN'T MATCH!")
            }
        }
        else{
            console.log("NO EMAIL")
        }
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
                <form className="logIn__form" onSubmit={this.handleLogInAttempt}>
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
                    <button type="submit" className="button logIn__submitButton">sign in</button>
                </form>
            </div>
        )
    }
}
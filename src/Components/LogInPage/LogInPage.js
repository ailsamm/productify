import React, { Component } from 'react';
import ValidationError from '../ValidationError/ValidationError';
import ProductifyContext from '../../ProductifyContext';
import { validateEmail, notNull } from '../../ValidationHelper';
import './LogInPage.css';

export default class LogInPage extends Component {

    static contextType = ProductifyContext;

    constructor(props){
        super(props);
        this.state = {
            email: {
                touched: false,
                validationMessage: "",
                isValid: false,
                value: "",
            },
            password: {
                touched: false,
                validationMessage: "",
                isValid: false,
                value: "",
            },
            failedLogInError: null
        }
    }

    handleLogInAttempt = (e) => {
        e.preventDefault();
        const context = this.context;
        const formIsValid = this.state.email.isValid &&
            this.state.password.isValid;

        if (formIsValid) {
            const user = context.usersLogin.find(user => user.email_address === this.state.email.value);
            if (user){
                if (user.password === this.state.password.value){
                    context.onLogInUser(user);
                    this.props.history.push("/projects");
                    return;
                }
                else {
                    this.setState({
                        ...this.state,
                        failedLogInError: "Password does not match the supplied email address."
                    })
                }
            }
            else {
                this.setState({
                    ...this.state,
                    failedLogInError: "No account found for the supplied email address."
                })
            }
        }
        else {
            this.setState({
                ...this.state,
                failedLogInError: "Please fix the errors in red before proceeding."
            })
        }
    }

    updateEmail = (value) => {
        const validation = validateEmail(value);
        this.setState({
            ...this.state,
            email: {
                touched: true,
                validationMessage: validation,
                isValid: !validation,
                value
            }
        })
    }

    updatePassword = (value) => {
        const validation = notNull(value);
        this.setState({
            ...this.state,
            password: {
                touched: true,
                validationMessage: validation,
                isValid: !validation,
                value
            }
        })
    }

    render(){
        return (
            <div className="logIn centeredContent">
                <form className="logIn__form" onSubmit={this.handleLogInAttempt}>
                    <label htmlFor="logIn__email">email address:</label>
                    <input name="logIn__email" 
                        id="logIn__email" 
                        placeholder="ada.lovelace@gmail.com" 
                        onChange={e => this.updateEmail(e.target.value.toLowerCase())}
                        type="text">
                    </input>
                    {this.state.email.touched && <ValidationError message={this.state.email.validationMessage}/>}
                    <label htmlFor="logIn__password">password:</label>
                    <input name="logIn__password" 
                        id="logIn__password" 
                        placeholder="************" 
                        onChange={e => this.updatePassword(e.target.value)}
                        type="password">
                    </input>
                    {this.state.password.touched && <ValidationError message={this.state.password.validationMessage}/>}
                    {this.state.failedLogInError && <ValidationError message={this.state.failedLogInError}/>}
                    <button type="submit" className="button logIn__submitButton">sign in</button>
                </form>
            </div>
        )
    }
}
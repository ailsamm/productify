import React, { Component } from 'react';
import { validateEmail, notNull, validatePassword, validateRepeatPassword } from '../../ValidationHelper';
import ValidationError from '../ValidationError/ValidationError';
import './SignUpPage.css';

export default class SignUpPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstName: {
                touched: false,
                value: ""
            },
            lastName: {
                touched: false,
                value: ""
            },
            email: {
                touched: false,
                value: ""
            },
            jobTitle: {
                touched: false,
                value: ""
            },
            password: {
                touched: false,
                value: ""
            },
            repeatPassword: {
                touched: false,
                value: ""
            },
            failedSignUpError: null
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted!")
    }

    updateFirstName(value) {
        this.setState({
            ...this.state,
            firstName: {
                touched: true,
                value
            }
        })
    }

    updateLastName(value) {
        this.setState({
            ...this.state,
            lastName: {
                touched: true,
                value
            }
        })
    }

    updateEmail(value) {
        this.setState({
            ...this.state,
            email: {
                touched: true,
                value
            }
        })
    }

    updateJobTitle(value) {
        this.setState({
            ...this.state,
            jobTitle: {
                touched: true,
                value
            }
        })
    }

    updatePassword(value) {
        this.setState({
            ...this.state,
            password: {
                touched: true,
                value
            }
        })
    }

    updateRepeatPassword(value) {
        this.setState({
            ...this.state,
            repeatPassword: {
                touched: true,
                value
            }
        })
    }

    render(){
        return (
            <div className="signUp centeredContent">
                <form className="signUp__form">
                    <label htmlFor="signUp__firstName">first name:</label>
                    <input name="signUp__firstName" 
                        onChange={e => this.updateFirstName(e.target.value)}
                        placeholder="Ada" 
                        id="signUp__firstName" 
                        type="text">
                    </input>
                    {this.state.firstName.touched && <ValidationError message={notNull(this.state.firstName.value)}/>}
                    <label htmlFor="signUp__lastName">last name:</label>
                    <input name="signUp__lastName" 
                        onChange={e => this.updateLastName(e.target.value)}
                        id="signUp__lastName" 
                        placeholder="Lovelace" 
                        type="text">
                    </input>
                    {this.state.lastName.touched && <ValidationError message={notNull(this.state.lastName.value)}/>}
                    <label htmlFor="signUp__email">email address:</label>
                    <input name="signUp__email" 
                        onChange={e => this.updateEmail(e.target.value)}
                        id="signUp__email" 
                        placeholder="ada.lovelace@gmail.com" 
                        type="text">
                    </input>
                    {this.state.email.touched && <ValidationError message={validateEmail(this.state.email.value)}/>}
                    <label htmlFor="signUp__job">job title:</label>
                    <input name="signUp__job" 
                        onChange={e => this.updateJobTitle(e.target.value)}
                        id="signUp__job" 
                        placeholder="Software developer" 
                        type="text">
                    </input>
                    {this.state.jobTitle.touched && <ValidationError message={notNull(this.state.jobTitle.value)}/>}
                    <label htmlFor="signUp__password">password:</label>
                    <input name="signUp__password" 
                        onChange={e => this.updatePassword(e.target.value)}
                        id="signUp__password" 
                        placeholder="************" 
                        type="password">
                    </input>
                    {this.state.password.touched && <ValidationError message={validatePassword(this.state.password.value)}/>}
                    <label htmlFor="signUp__passwordRepeat">repeat password:</label>
                    <input name="signUp__passwordRepeat" 
                        onChange={e => this.updateRepeatPassword(e.target.value)}
                        id="signUp__passwordRepeat" 
                        placeholder="************" 
                        type="password">
                    </input>
                    {this.state.repeatPassword.touched && <ValidationError message={validateRepeatPassword(this.state.password.value, this.state.repeatPassword.value)}/>}
                    {this.state.failedSignUpError && <ValidationError message={this.state.failedSignUpError}/>}
                    <button type="submit" onClick={this.handleSubmit} className="button signUp__submitButton">submit</button>
                </form>
            </div>
        )
    }
}
import React, { Component } from 'react';
import ProductifyContext from '../../ProductifyContext';
import { validateEmail, notNull, validatePassword, validateRepeatPassword } from '../../ValidationHelper';
import ValidationError from '../ValidationError/ValidationError';
import { getRandomId } from '../../requestHandler';
import CONFIG from '../../config';
import './SignUpPage.css';

export default class SignUpPage extends Component {

    static contextType = ProductifyContext;

    constructor(props){
        super(props);
        this.state = {
            firstName: {
                touched: false,
                validationMessage: "",
                isValid: false,
                value: ""
            },
            lastName: {
                touched: false,
                validationMessage: "",
                isValid: false,
                value: ""
            },
            email: {
                touched: false,
                validationMessage: "",
                isValid: false,
                value: ""
            },
            jobTitle: {
                touched: false,
                validationMessage: "",
                isValid: false,
                value: ""
            },
            password: {
                touched: false,
                validationMessage: "",
                isValid: false,
                value: ""
            },
            repeatPassword: {
                touched: false,
                validationMessage: "",
                isValid: false,
                value: ""
            },
            failedSignUpError: null
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const formIsValid = this.state.firstName.isValid &&
            this.state.lastName.isValid &&
            this.state.email.isValid &&
            this.state.jobTitle.isValid &&
            this.state.password.isValid &&
            this.state.repeatPassword.isValid;

        if (formIsValid) {
            const id = getRandomId();
            const newUserLogIn = {
                user_id: id,
                email_address: this.state.email.value.toLowerCase(),
                password: this.state.password.value,
            }
            const newUserInfo = {
                id,
                first_name: this.titleCase(this.state.firstName.value),
                last_name: this.titleCase(this.state.lastName.value),
                job_title: this.state.jobTitle.value,
                team_id: 1 /* to-do: make dynamic */ 
            }
            this.context.onSignUpUser(newUserLogIn, newUserInfo);
            this.props.history.push("/projects");
        }
        else {
            this.setState({
                ...this.state,
                failedSignUpError: "Please fix the errors in red before proceeding."
            })
        }
    }

    titleCase(s) {
        let updatedS = s.toLowerCase();
        updatedS = s.charAt(0).toUpperCase() + s.slice(1);
        return updatedS;
    }

    updateFirstName(value) {
        const validation = notNull(value);
        this.setState({
            ...this.state,
            firstName: {
                touched: true,
                validationMessage: validation,
                isValid: !validation,
                value
            }
        })
    }

    updateLastName(value) {
        const validation = notNull(value);
        this.setState({
            ...this.state,
            lastName: {
                touched: true,
                validationMessage: validation,
                isValid: !validation,
                value
            }
        })
    }

    updateEmail(value) {
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

    updateJobTitle(value) {
        const validation = notNull(value);
        this.setState({
            ...this.state,
            jobTitle: {
                touched: true,
                validationMessage: validation,
                isValid: !validation,
                value
            }
        })
    }

    updatePassword(value) {
        const validation = validatePassword(value);
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

    updateRepeatPassword(value) {
        const validation = validateRepeatPassword(value, this.state.password.value);
        this.setState({
            ...this.state,
            repeatPassword: {
                touched: true,
                validationMessage: validation,
                isValid: !validation,
                value
            }
        })
    }

    getDemoMessage() {
        return (
            <div className="centeredContent">
                <h3 class="demoMessage">In order to use <span className="demoMessage__productify">Productify</span>, you must be invited by your team administrator.
                Please ask them to add your email address so that you may be automatically added to your team's page.</h3>
            </div>
        )
    }

    getSignUpForm() {
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
                    {this.state.firstName.touched && <ValidationError message={this.state.firstName.validationMessage}/>}
                    <label htmlFor="signUp__lastName">last name:</label>
                    <input name="signUp__lastName" 
                        onChange={e => this.updateLastName(e.target.value)}
                        id="signUp__lastName" 
                        placeholder="Lovelace" 
                        type="text">
                    </input>
                    {this.state.lastName.touched && <ValidationError message={this.state.lastName.validationMessage}/>}
                    <label htmlFor="signUp__email">email address:</label>
                    <input name="signUp__email" 
                        onChange={e => this.updateEmail(e.target.value)}
                        id="signUp__email" 
                        placeholder="ada.lovelace@gmail.com" 
                        type="text">
                    </input>
                    {this.state.email.touched && <ValidationError message={this.state.email.validationMessage}/>}
                    <label htmlFor="signUp__job">job title:</label>
                    <input name="signUp__job" 
                        onChange={e => this.updateJobTitle(e.target.value)}
                        id="signUp__job" 
                        placeholder="Software developer" 
                        type="text">
                    </input>
                    {this.state.jobTitle.touched && <ValidationError message={this.state.jobTitle.validationMessage}/>}
                    <label htmlFor="signUp__password">password:</label>
                    <input name="signUp__password" 
                        onChange={e => this.updatePassword(e.target.value)}
                        id="signUp__password" 
                        placeholder="************" 
                        type="password">
                    </input>
                    {this.state.password.touched && <ValidationError message={this.state.password.validationMessage}/>}
                    <label htmlFor="signUp__passwordRepeat">repeat password:</label>
                    <input name="signUp__passwordRepeat" 
                        onChange={e => this.updateRepeatPassword(e.target.value)}
                        id="signUp__passwordRepeat" 
                        placeholder="************" 
                        type="password">
                    </input>
                    {this.state.repeatPassword.touched && <ValidationError message={this.state.repeatPassword.validationMessage}/>}
                    {this.state.failedSignUpError && <ValidationError message={this.state.failedSignUpError}/>}
                    <button type="submit" onClick={this.handleSubmit} className="button signUp__submitButton">submit</button>
                </form>
            </div>
        )
    }

    render(){
        return (
            <div>
                {CONFIG.env === "DEMO" ? this.getDemoMessage() : this.getSignUpForm()}
            </div>
        )
    }
}
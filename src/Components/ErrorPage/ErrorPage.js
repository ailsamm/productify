import React, { Component } from 'react';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';
import './ErrorPage.css';

export default class ErrorPage extends Component {
    render() {
        const { error } = this.props;
        return (
            <div className="errorPage">
                <h1 className="errorPage__errorCode">{error.code}</h1>
                <h2>{error.message} <FontAwesomeIcon icon={faSadCry}/></h2>
            </div>
        );
    }
}
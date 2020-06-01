import React, { Component } from 'react';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';
import './NotFound.css';

export default class NotFound extends Component {
    render() {
        return (
            <div className="notFound">
                <h1 className="errorCode">404</h1>
                <h2>Page not found <FontAwesomeIcon icon={faSadCry}/></h2>
            </div>
        )
    }
}
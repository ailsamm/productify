import React, { Component } from 'react';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';
import './Unauthorized.css';

export default class Unauthorized extends Component {
    render() {
        return (
            <div className="unauthorized">
                <h1 className="errorCode">403</h1>
                <h2>Access forbidden <FontAwesomeIcon icon={faSadCry}/></h2>
            </div>
        )
    }
}
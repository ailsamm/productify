import React, { Component } from 'react';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

export default class Header extends Component {
    render(){
        return(
            <div className="header">
                <h1 className="logo">PRODUCTIFY <FontAwesomeIcon icon={faRocket}/></h1>
            </div>
        )
    }
}
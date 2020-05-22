import React, { Component } from 'react';
import Header from '../Header/Header';
import './App.css';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){}

  render() {
    return (
      <div className="app">
        <Header/>
      </div>
    );
  }
  
}

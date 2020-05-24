import React, { Component } from 'react';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import './App.css';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
      loggedInUser: {
        firstName: "Ailsa",
        lastName:"Meechan-Maddon"
      }
    }
  }

  componentDidMount(){}

  render() {
    return (
      <div className="app">
        <Header loggedIn={this.state.loggedIn} user={this.state.loggedInUser}/>
        <MainContent/>
      </div>
    );
  }
  
}

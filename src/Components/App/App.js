import React, { Component } from 'react';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import ProductifyContext from '../../ProductifyContext';
import STORE from '../../STORE';
import './App.css';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {}
  }
  
  componentDidMount(){
    const {teamName, isLoggedIn, loggedInUser, members, tasks} = STORE;
    this.setState({
      teamName, 
      isLoggedIn, 
      loggedInUser, 
      members, 
      tasks
    })
  }

  render() {
    const contextValue = {
      teamName: this.state.teamName, 
      isLoggedIn: this.state.isLoggedIn, 
      loggedInUser: this.state.loggedInUser, 
      members: this.state.members, 
      tasks: this.state.tasks
    }
    return (
      <ProductifyContext.Provider value={contextValue}>
        <div className="app">
          <Header isLoggedIn={this.state.isLoggedIn} user={this.state.loggedInUser}/>
          <MainContent/>
        </div>
      </ProductifyContext.Provider>
    );
  }
  
}

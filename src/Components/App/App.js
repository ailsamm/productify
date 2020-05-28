  import React, { Component } from 'react';
  import Header from '../Header/Header';
  import MainContentRouter from '../MainContentRouter/MainContentRouter';
  import ProductifyContext from '../../ProductifyContext';
  import STORE from '../../STORE';
  import './App.css';

  export default class App extends Component {

    constructor(props){
      super(props);
      this.state = {
        isLoggedIn: false, 
        loggedInUser: null, 
        usersInfo: [],
        usersLogin: [],
        teams: [],
        projects: [],
        tasks: [],
        currentProject: null
      }
    }

    logInUser = (userToLogIn) => {
      this.setState({
        ...this.state,
        isLoggedIn: true,
        loggedInUser: userToLogIn.userId
      })
    }

    signOutUser = () => {
      this.setState({
        ...this.state,
        isLoggedIn: false,
        loggedInUser: null
      })
    }

    signUpUser = (newUserLogIn, newUserInfo) => {
      const { id } = newUserInfo;
      // Simultaneously add new user and log user in
      this.setState({
        ...this.state,
        usersLogin: [...this.state.usersLogin, newUserLogIn],
        usersInfo: [...this.state.usersInfo, newUserInfo],
        isLoggedIn: true,
        loggedInUser: id
      })
    }

    addTask = (task) => {
      const updatedTasks = [...this.state.tasks, task];
      this.setState({
        ...this.state,
        tasks: updatedTasks
      })
    }

    deleteTask = (taskToDelete) => {
      const updatedTasks = this.state.tasks.filter(task => task.id !== taskToDelete);
      this.setState({
        ...this.state,
        tasks: updatedTasks
      })
    }

    onDrop = (e, status) => {
      e.preventDefault();
      const taskId = parseInt(e.dataTransfer.getData("id"));

      let tasks = this.state.tasks.filter((task => {
          if (task.id === taskId){
              task.status = status;
          }
          return task;
      }));

      this.setState({
          ...this.state,
          tasks
      })
    }

    updateCurrentProject = (e, projectId) => {
      e.preventDefault();
      let updatedProjectId = projectId;
      if (projectId === this.state.currentProject){
          updatedProjectId = null;
      }
      this.setState({
          ...this.state,
          currentProject: updatedProjectId
      })
  }
    
    componentDidMount(){
      const {isLoggedIn, loggedInUser, projects, usersInfo, usersLogin, teams, tasks} = STORE;
      this.setState({
        isLoggedIn, 
        loggedInUser, 
        usersInfo,
        usersLogin,
        teams, 
        projects,
        tasks
      })
    }

    render() {
      const contextValue = {
        isLoggedIn: this.state.isLoggedIn, 
        loggedInUser: this.state.loggedInUser, 
        teams: this.state.teams,
        usersInfo: this.state.usersInfo,
        usersLogin: this.state.usersLogin, 
        projects: this.state.projects,
        tasks: this.state.tasks,
        currentProject: this.state.currentProject,
        onLogInUser: this.logInUser,
        onSignUpUser: this.signUpUser,
        onSignOutUser: this.signOutUser,
        onDrop: this.onDrop,
        onAddTask: this.addTask,
        onDeleteTask: this.deleteTask,
        updateCurrentProject: this.updateCurrentProject
      }
      return (
        <ProductifyContext.Provider value={contextValue}>
          <div className="app">
            <Header/>
            <MainContentRouter/>
          </div>
        </ProductifyContext.Provider>
      );
    }
    
  }

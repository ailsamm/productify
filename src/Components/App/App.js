  import React, { Component } from 'react';
  import Header from '../Header/Header';
  import MainContentRouter from '../MainContentRouter/MainContentRouter';
  import ProductifyContext from '../../ProductifyContext';
  import { fetchData, updateTaskInDb, deleteTaskInDb, addNewUser } from '../../requestHandler';
  import './App.css';

  export default class App extends Component {

    constructor(props){
      super(props);
      this.state = {
        isLoggedIn: true, 
        loggedInUser: 1, 
        usersInfo: [],
        usersLogin: [],
        teams: [],
        projects: [],
        tasks: [],
        currentProject: null
      }
    }

    componentDidMount(){
      fetchData()
        .then(([teams, projects, usersInfo, usersLogin, tasks]) => {
          this.setState({teams, projects, usersInfo, usersLogin, tasks})
        })
    }

    logInUser = (userToLogIn) => {
      this.setState({
        ...this.state,
        isLoggedIn: true,
        loggedInUser: userToLogIn.user_id
      })
    }

    signOutUser = () => {
      this.setState({
        ...this.state,
        isLoggedIn: false,
        loggedInUser: null
      })
    }

    signUpUser = (newUserLogin, newUserInfo) => {
      const { id } = newUserInfo;
      // Simultaneously add new user and log user in
      addNewUser(newUserInfo, newUserLogin);
      this.setState({
        ...this.state,
        usersLogin: [...this.state.usersLogin, newUserLogin],
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
      deleteTaskInDb(taskToDelete);
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

      updateTaskInDb(taskId, { status });

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

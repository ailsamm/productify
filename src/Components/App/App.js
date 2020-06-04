  import React, { Component } from 'react';
  import Header from '../Header/Header';
  import MainContentRouter from '../MainContentRouter/MainContentRouter';
  import ProductifyContext from '../../ProductifyContext';
  import { fetchData, updateTaskInDb, deleteTaskInDb, addNewUser } from '../../requestHandler';
  import CONFIG from '../../config';
  import './App.css';

  export default class App extends Component {

    constructor(props){
      super(props);
      this.state = {
        loggedInUser: null, 
        usersInfo: [],
        usersLogin: [],
        teams: [],
        projects: [],
        tasks: [],
        currentProject: null,
        showAllUserTasks: true,
      }
    }

    componentDidMount(){
      const loggedInUser = CONFIG.env === "DEMO" ? 1 : null;
      fetchData()
        .then(([teams, projects, usersInfo, usersLogin, tasks]) => {
          this.setState({teams, projects, usersInfo, usersLogin, tasks, loggedInUser})
        })
    }

    logInUser = (userToLogIn) => {
      this.setState({
        ...this.state,
        loggedInUser: userToLogIn.user_id
      })
    }

    signOutUser = () => {
      this.setState({
        ...this.state,
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

    updateFilterByAssignee = () => {
      this.setState({
          ...this.state,
          showAllUserTasks: !(this.state.showAllUserTasks)
      })
    }

    render() {
      const contextValue = {
        loggedInUser: this.state.loggedInUser, 
        teams: this.state.teams,
        usersInfo: this.state.usersInfo,
        usersLogin: this.state.usersLogin, 
        projects: this.state.projects,
        tasks: this.state.tasks,
        currentProject: this.state.currentProject,
        showAllUserTasks: this.state.showAllUserTasks,
        onLogInUser: this.logInUser,
        onSignUpUser: this.signUpUser,
        onSignOutUser: this.signOutUser,
        onDrop: this.onDrop,
        onAddTask: this.addTask,
        onDeleteTask: this.deleteTask,
        updateCurrentProject: this.updateCurrentProject,
        updateFilterByAssignee: this.updateFilterByAssignee
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

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
        teamName: "", 
        isLoggedIn: false, 
        loggedInUser: {}, 
        members: [], 
        projects: [],
        tasks: [],
        currentProject: null
      }
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
      const {teamName, isLoggedIn, loggedInUser, projects, members, tasks} = STORE;
      this.setState({
        teamName, 
        isLoggedIn, 
        loggedInUser, 
        members, 
        projects,
        tasks
      })
    }

    render() {
      const contextValue = {
        teamName: this.state.teamName, 
        isLoggedIn: this.state.isLoggedIn, 
        loggedInUser: this.state.loggedInUser, 
        members: this.state.members, 
        projects: this.state.projects,
        tasks: this.state.tasks,
        currentProject: this.state.currentProject,
        onDrop: this.onDrop,
        onAddTask: this.addTask,
        onDeleteTask: this.deleteTask,
        updateCurrentProject: this.updateCurrentProject
      }
      return (
        <ProductifyContext.Provider value={contextValue}>
          <div className="app">
            <Header isLoggedIn={this.state.isLoggedIn} user={this.state.loggedInUser}/>
            <MainContentRouter/>
          </div>
        </ProductifyContext.Provider>
      );
    }
    
  }

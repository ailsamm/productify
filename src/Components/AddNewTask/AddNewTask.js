import React, { Component } from 'react';
import ProjectsSidebar from '../ProjectsSidebar/ProjectsSidebar';
import ValidationError from '../ValidationError/ValidationError';
import ProductifyContext from '../../ProductifyContext';
import './AddNewTask.css';

export default class AddNewTask extends Component {

    static contextType = ProductifyContext;

    constructor(props){
        super(props);
        this.state = {
            title: {touched: false, value: null},
            assignee: {touched: false, value: null},
            project: {touched: false, value: null},
            description: {touched: false, value: null},
            deadline: {touched: false, value: null}
        }
    }

    validateTitle = () => {
        const title = this.state.title.value.trim();
        if (title.length === 0) {
            return '**Title is required';
        }
    }

    handleGoBack = () => {
        this.props.history.push("/projects");
    }

    addTaskRequest = (e) => {
        e.preventDefault();
        const newTask = {
            name: this.state.title.value,
            assignee: this.state.assignee.value,
            project: this.state.project.value,
            description: this.state.description.value,
            deadline: this.state.deadline.value,
            status: "backlog",
            id: 44
        }
        this.context.onAddTask(newTask);
        this.props.history.push("/projects");
    
        /*fetch('https://damp-journey-21967.herokuapp.com/api/notes', {
          method: 'POST',
          body: JSON.stringify(newNote),
          headers: {
            'content-type': 'application/json'
          },
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('An error occurred while attempting to add the note')
          }
          return response.json();
        })
        .then(() => {
            this.context.onAddTask(newTask);
            this.props.history.push("/");
        })
        .catch(e => console.log(e));*/
    }

    updateTitle = val => {
        this.setState({
            ...this.state,
            title: {touched: true, value: val}
        })
    }

    updateAssignee = val => {
        this.setState({
            ...this.state,
            assignee: {touched: true, value: parseInt(val)}
        })
    }

    updateProject = val => {
        this.setState({
            ...this.state,
            project: {touched: true, value: parseInt(val)}
        })
    }

    updateDescription = val => {
        this.setState({
            ...this.state,
            description: {touched: true, value: val}
        })
    }

    updateDeadline = val => {
        this.setState({
            ...this.state,
            deadline: {touched: true, value: val}
        })
    }

    render() {
        return (
            <ProductifyContext.Consumer>
                {context => (
                    <div className="addNewTask">
                        <ProjectsSidebar/>
                        <div className="addNewTask__formContainer">
                            <form className="addNewTask__form" onSubmit={e => this.addTaskRequest(e)}>
                                <label htmlFor="addNewTask__title">title:</label>
                                <input name="addNewTask__title" 
                                    id="addNewTask__title" 
                                    onChange={e => this.updateTitle(e.target.value)}
                                    placeholder="buy milk" 
                                    type="text"
                                    aria-required="true">
                                </input>
                                {this.state.title.touched && <ValidationError message={this.validateTitle()}/>}
                                <label htmlFor="addNewTask__assignee">assignee:</label>
                                <select 
                                    className="addNewTask__select"
                                    name="addNewTask__assignee" 
                                    id="addNewTask__assignee" 
                                    aria-required="true"
                                    onChange={e => this.updateAssignee(e.target.value)}>
                                    <option value=""></option>
                                    {context.members.map(member => (
                                        <option key={member.id} value={member.id}>{member.firstName} {member.lastName}</option>
                                    ))}
                                </select>
                                <label htmlFor="addNewTask__project">project:</label>
                                <select 
                                    className="addNewTask__select"
                                    name="addNewTask__project" 
                                    id="addNewTask__project" 
                                    aria-required="true"
                                    onChange={e => this.updateProject(e.target.value)}>
                                    <option value=""></option>
                                    {context.projects.map(project => (
                                        <option key={project.id} value={project.id}>{project.name}</option>
                                    ))}
                                </select>
                                <label htmlFor="addNewTask__description">description:</label>
                                <textarea name="addNewTask__description" 
                                    id="addNewTask__description" 
                                    onChange={e => this.updateDescription(e.target.value)}
                                    placeholder="Go to the store and buy the milk"
                                    aria-required="true">
                                </textarea>
                                <label htmlFor="addNewTask__deadline">deadline:</label>
                                <input name="addNewTask__deadline" 
                                    id="addNewTask__deadline" 
                                    onChange={e => this.updateDeadline(e.target.value)}
                                    placeholder="20/06/2020"
                                    aria-required="true">
                                </input>
                                <div className="addNewTask__buttonContainer">
                                    <button type="button" onClick={this.handleGoBack} className="button stopButton">back</button>
                                    <button type="submit" className="button goButton">save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </ProductifyContext.Consumer>
        )
    }
}
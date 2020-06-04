import React, { Component } from 'react';
import ProjectsSidebar from '../ProjectsSidebar/ProjectsSidebar';
import ValidationError from '../ValidationError/ValidationError';
import { notNull } from '../../ValidationHelper';
import 'react-dates/initialize';
import config from '../../config';
import { getRandomId } from '../../requestHandler';
import { SingleDatePicker } from 'react-dates';
import ProductifyContext from '../../ProductifyContext';
import 'react-dates/lib/css/_datepicker.css';
import './AddNewTask.css';

export default class AddNewTask extends Component {

    static contextType = ProductifyContext;

    constructor(props){
        super(props);
        this.state = {
            title: {
                touched: false,
                validationMessage: "",
                isValid: false, 
                value: null
            },
            assignee: {
                touched: false, 
                validationMessage: "",
                isValid: false,
                value: null
            },
            project: {
                touched: false, 
                validationMessage: "",
                isValid: false,
                value: null
            },
            description: {
                touched: false, 
                validationMessage: "",
                isValid: true,
                value: null
            },
            deadline: {
                touched: false,
                value: null
            },
            focused: false
        }
    }

    handleGoBack = () => {
        this.props.history.push("/projects");
    }

    addTaskRequest = (e) => {
        e.preventDefault();
        const newTask = {
            task_name: this.state.title.value,
            assignee: this.state.assignee.value,
            project_id: this.state.project.value,
            description: this.state.description.value,
            deadline: this.state.deadline.value,
            status: "backlog",
            id: getRandomId()
        }
    
        fetch(`${config.serverUrl}/tasks`, {
          method: 'POST',
          body: JSON.stringify(newTask),
          headers: {
            'content-type': 'application/json'
          },
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('An error occurred while attempting to add the task')
          }
          return response.json();
        })
        .then(() => {
            this.context.onAddTask(newTask);
            this.handleGoBack();
        })
        .catch(e => console.log(e));
    }

    updateTitle = value => {
        const validation = notNull(value);
        this.setState({
            ...this.state,
            title: {
                touched: true, 
                validationMessage: validation,
                isValid: !validation,
                value
            }
        })
    }

    updateAssignee = value => {
        const validation = notNull(value);
        this.setState({
            ...this.state,
            assignee: {
                touched: true, 
                validationMessage: validation,
                isValid: !validation,
                value: parseInt(value)
            }
        })
    }

    updateProject = value => {
        const validation = notNull(value);
        this.setState({
            ...this.state,
            project: {
                touched: true,
                validationMessage: validation,
                isValid: !validation, 
                value: parseInt(value)
            }
        })
    }

    updateDescription = value => {
        this.setState({
            ...this.state,
            description: {
                touched: true, 
                value
            }
        })
    }

    updateDeadline = value => {
        this.setState({
            ...this.state,
            deadline: {
                touched: true,
                value
            }
        })
    }

    getMembers(){
        const context = this.context;
        if (context.teams.length > 0){
            const user = context.usersInfo.find(user => user.id === context.loggedInUser);
            const teamId = user.team_id;
            const members = context.usersInfo.filter(member => member.team_id === teamId);
            return members.map(member => {
                return (
                    <option key={member.id} value={member.id}>{member.first_name} {member.last_name}</option>
                )
            });
        }
    }

    getProjects(){
        const context = this.context;
        if (context.projects.length > 0){
            const user = context.usersInfo.find(user => user.id === context.loggedInUser) || {};
            const teamId = user.team_id;
            const projects = context.projects.filter(project => project.team_id === teamId) || {};
            return projects.map(project => {
                return (
                    <option key={project.id} value={project.id}>{project.project_name}</option>
                )
            });
        }
    }

    render() {
        return (
            <ProductifyContext.Consumer>
                {context => (
                    <div className="addNewTask">
                        <ProjectsSidebar showButton={false} displayProjectInfo={false}/>
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
                                {this.state.title.touched && <ValidationError message={this.state.title.validationMessage}/>}
                                <label htmlFor="addNewTask__assignee">assignee:</label>
                                <select 
                                    className="addNewTask__select"
                                    name="addNewTask__assignee" 
                                    id="addNewTask__assignee" 
                                    aria-required="true"
                                    onChange={e => this.updateAssignee(e.target.value)}>
                                    <option value=""></option>
                                    {this.getMembers()}
                                </select>
                                {this.state.assignee.touched && <ValidationError message={this.state.assignee.validationMessage}/>}
                                <label htmlFor="addNewTask__project">project:</label>
                                <select 
                                    className="addNewTask__select"
                                    name="addNewTask__project" 
                                    id="addNewTask__project" 
                                    aria-required="true"
                                    onChange={e => this.updateProject(e.target.value)}>
                                    <option value=""></option>
                                    {this.getProjects()}
                                </select>
                                {this.state.project.touched && <ValidationError message={this.state.project.validationMessage}/>}
                                <label htmlFor="addNewTask__description">description:</label>
                                <textarea name="addNewTask__description" 
                                    id="addNewTask__description" 
                                    onChange={e => this.updateDescription(e.target.value)}
                                    placeholder="Go to the store and buy the milk"
                                    aria-required="true">
                                </textarea>
                                <label htmlFor="addNewTask__deadline">deadline:</label>
                                <SingleDatePicker
                                    date={this.state.deadline.value} 
                                    onDateChange={date => this.updateDeadline(date)}
                                    focused={this.state.focused}
                                    onFocusChange={({ focused }) => this.setState({ focused })}
                                    id="addNewTask__datePicker"
                                />
                                <div className="addNewTask__buttonContainer">
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
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ProductifyContext from '../../ProductifyContext';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import './TaskCard.css';

export default class TaskCard extends Component {

    static contextType = ProductifyContext;

    // adds data header so that it may be accessed at drop point
    onDragStart = (e, taskId) => {
        e.dataTransfer.setData("id", taskId);
    }

    // card color depends on task status
    getColor(status){
        let color;
        switch(status) {
            case "inProgress":
                color= 'var(--productify-turquoise)';
                break;
            case "inReview":
                color= 'var(--productify-yellow)';
                break;
            case "complete":
                color= 'var(--productify-green)';
                break;
            case "backlog":
                color= 'var(--productify-red)';
                break;
            default:
                color= '#FFF';
          }
          return {background: color};
    }

    getDeadline(deadline) {
        if (deadline !== null){
            return moment(deadline).format("MMM Do YYYY"); 
        }
        return "Deadline not set"
    }

    getInitials = (id) => {
        const user = this.context.usersInfo.find(user => user.id === id) || {};
        const initials = user.first_name.charAt(0) + user.last_name.charAt(0);
        return initials;
    }

    // creates avatar of task's assignee's initials
    getAssigneeAvatar = (id) => {
        const user = this.context.usersInfo.find(user => user.id === id) || {};
        return (
            <div className="assigneeAvatarContainer">
                <h5 className="assignee">Assignee:&nbsp;</h5>
                <div className='assigneeAvatar' title={user.first_name || ""}>
                    <span className="assigneeAvatar__initials">{this.getInitials(id)}</span>
                </div>
            </div>
        );
    }

    render() {
        const { id, task_name, deadline, status, assignee} = this.props.task;
        return (
            <NavLink to={`/projects/${id}`} className="taskCard__nav">
                <div key={id} 
                value={id}
                draggable 
                onDragStart = {(e) => this.onDragStart(e, id)}
                className="taskCard" 
                title={task_name} 
                style={this.getColor(status)}>
                    <h4 className="taskCard__name">{task_name}</h4>
                    <h5 className="taskCard__deadline">
                        <FontAwesomeIcon title="Deadline" icon={faClock}/>&nbsp; 
                            {this.getDeadline(deadline)}
                    </h5>
                    {assignee && this.getAssigneeAvatar(assignee)}
                </div>
            </NavLink>
        );
    }
}
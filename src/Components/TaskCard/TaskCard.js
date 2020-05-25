import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './TaskCard.css';

export default class TaskCard extends Component {

    onDragStart = (e, taskId) => {
        e.dataTransfer.setData("id", taskId);
    }

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

    render() {
        const { id, name, deadline, status} = this.props.task;
        return (
            <NavLink to="/" className="taskCard__nav">
                <div key={name} 
                value={id}
                draggable 
                onDragStart = {(e) => this.onDragStart(e, id)}
                className="taskCard" 
                title={name} 
                style={this.getColor(status)}>
                    <h4 className="taskCard__name">{name}</h4>
                    <h5 className="taskCard__deadline">{deadline}</h5>
                </div>
            </NavLink>
        )
    }
}
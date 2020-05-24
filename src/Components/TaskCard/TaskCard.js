import React, { Component } from 'react';
import './TaskCard.css';

export default class TaskCard extends Component {

    onDragStart = (e, taskId) => {
        e.dataTransfer.setData("id", taskId);
    }

    getColor(status){
        let color;
        switch(status) {
            case "inProgress":
                return ({background: 'rgba(151, 255, 248, 0.3)'});
            case "inReview":
                color= 'rgba(255, 231, 97, 0.3)';
                break;
            case "complete":
                color= 'rgba(168, 247, 148, 0.3)';
                break;
            case "backlog":
                color= 'rgba(255, 157, 157, 0.3)';
                break;
            default:
                color= '#FFF';
          }
          return {background: color};
    }
    render() {
        const { id, name, deadline, status} = this.props.task;
        return (
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
        )
    }
}
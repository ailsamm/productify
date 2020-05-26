import React, { Component } from 'react';
import TeamMember from '../TeamMember/TeamMember';
import Project from '../Project/Project';
import { Pie, Doughnut } from 'react-chartjs-2';
import ProductifyContext from '../../ProductifyContext';
import './ProjectsSidebar.css';

export default class ProjectsSidebar extends Component {

    static contextType = ProductifyContext;

    constructor(props){
        super(props);
        this.state = {
            pieLabels: ['Backlog', 'In Progress', 'In Review', 'Complete'],
            pieDataset: [
                {
                label: 'Tasks',
                backgroundColor: ['#ffc0cb8a', '#c0fffb95', '#ebeb7d6e', '#a8f7944d'],
                borderWidth: 0.4,
                borderColor: '#767676',
                data: [3, 2, 1, 2]
                }
            ],
            pieLabels2: ['Complete', 'Incomplete'],
            pieDataset2: [
                {
                label: 'Tasks',
                backgroundColor: ['#a8f7944d', '#f4f4f497'],
                borderWidth: 0.4,
                borderColor: '#767676',
                data: [2, 6]
                }
            ],
        }
    } 

    getMembers(){
        const members = this.context.members || [];
        return members.map(teamMember => <TeamMember key={teamMember.name} member={teamMember}></TeamMember>);
    }

    getProjects(){
        const projects = this.context.projects || [];
        return projects.map(project => {
            let className= ""
            if (this.props.currentProject === project.id){
                className = " selectedProject"
            }
            return <Project className={className} updateCurrentProject={this.props.updateCurrentProject} key={project.id} project={project}></Project>})
    }

    createCharts(){
        return (
            <div className="projects__sidebar__charts">
                <Pie
                    data={{
                        labels: this.state.pieLabels,
                        datasets: this.state.pieDataset
                    }}
                    height={300}
                    options={{
                        title:{
                            display:true,
                            text:'Task status',
                            fontSize:15
                        },
                        legend:{
                        display:false,
                        }
                    }}
                />
                <Doughnut
                    data={{
                        labels: this.state.pieLabels2,
                        datasets: this.state.pieDataset2
                    }}
                    height={300}
                    options={{
                        title:{
                        display:true,
                        text:'Progress',
                        fontSize:15
                        },
                        legend:{
                        display:false,
                        }
                    }}
                    />
            </div>
        )
    }

    getContent(){
        return this.props.currentProject != null ? this.createCharts() :
            <div>
                <h3>Members:</h3>
                <div className="projects__sidebar__members">
                    {this.getMembers()}
                </div> 
            </div>

    }

    render() {
        return (
            <div className="projects__sidebar projects__column">
                <h2>Team name</h2>
                <h3>Projects:</h3>
                <div className="projects__sidebar__members">
                    {this.getProjects()}
                </div>
                {this.getContent()}          
            </div>
        )
    }
}
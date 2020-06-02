import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router } from 'react-router-dom';
import Project from './Project';

it('renders without crashing', () => {
    const project = {
        project_name: "Test project",
        id: 0,
    }
    const div = document.createElement('div');
    ReactDOM.render(<Router><Project project={project} className=""/></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
});
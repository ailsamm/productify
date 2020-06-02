import React from 'react';
import ReactDOM from 'react-dom';
import Project from './Project';

it.skip('renders without crashing', () => {
    const project = {
        project_name: "Test project",
        id: 0,
    }
    const div = document.createElement('div');
    ReactDOM.render(<Project project={project} className=""/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
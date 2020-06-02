import React from 'react';
import ReactDOM from 'react-dom';
import ProjectsColumn from './ProjectsColumn';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProjectsColumn/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
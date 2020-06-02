import React from 'react';
import ReactDOM from 'react-dom';
import ProjectsPage from './ProjectsPage';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProjectsPage/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
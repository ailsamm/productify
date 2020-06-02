import React from 'react';
import ReactDOM from 'react-dom';
import ProjectSidebar from './ProjectsSidebar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProjectSidebar/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
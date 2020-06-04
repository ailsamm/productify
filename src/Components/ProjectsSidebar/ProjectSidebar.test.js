import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router } from 'react-router-dom';
import ProjectSidebar from './ProjectsSidebar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><ProjectSidebar/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
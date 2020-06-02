import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router } from 'react-router-dom';
import ProjectsPage from './ProjectsPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><ProjectsPage/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
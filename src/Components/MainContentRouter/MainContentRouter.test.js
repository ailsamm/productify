import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router } from 'react-router-dom';
import MainContentRouter from './MainContentRouter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><MainContentRouter/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
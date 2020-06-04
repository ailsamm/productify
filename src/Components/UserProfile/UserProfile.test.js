import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import UserProfile from './UserProfile';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><UserProfile/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
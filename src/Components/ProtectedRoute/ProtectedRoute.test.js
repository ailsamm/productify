import React from 'react';
import ReactDOM from 'react-dom';
import ProtectedRoute from './ProtectedRoute';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProtectedRoute/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
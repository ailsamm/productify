import React from 'react';
import ReactDOM from 'react-dom';
import ErrorPage from './ErrorPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const error = {
      message: "Test message",
      code: 400
  }
  ReactDOM.render(<ErrorPage error={error}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
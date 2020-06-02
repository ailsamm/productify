import React from 'react';
import ReactDOM from 'react-dom';
import AddNewTask from './AddNewTask';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddNewTask/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
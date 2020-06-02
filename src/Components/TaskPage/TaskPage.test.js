import React from 'react';
import ReactDOM from 'react-dom';
import TaskPage from './TasKPage';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskPage/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
import React from 'react';
import ReactDOM from 'react-dom';
import MainContentRouter from './MainContentRouter';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainContentRouter/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
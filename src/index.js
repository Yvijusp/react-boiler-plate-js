require('file-loader?name=[name].[ext]!../public/index.html');
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

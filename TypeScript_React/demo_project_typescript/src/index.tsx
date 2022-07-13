import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import FirstComponent from './components/FirstComponenet';



ReactDOM.render(
  <div>
    <h1>Hello Tofik Welcome to React and TypeScript</h1>
    <FirstComponent/>
  </div>,
  document.getElementById("root")
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Form from "./Forms";
import App from './App';
import App2 from './project2/App2';
import App3 from './project3/App3';
import App4 from './project4/App4';
import App5 from './project5/App5';
import App52 from './project5/App52';
import App6 from './project6/App6';
import App7 from './project7/App7';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App7/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

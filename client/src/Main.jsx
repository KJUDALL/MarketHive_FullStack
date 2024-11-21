// Main entry point of our React app - renders the App.jsx componenet using ReactDOM
// Include setup for React and any global configs
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Assuming you have a global CSS file

// Main entry point of our React app - renders the App component using ReactDOM
// Include setup for React and any global configs

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


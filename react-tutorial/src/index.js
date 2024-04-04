// starting file after npm start

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // reading root id from public/index.html
root.render( // attaching App component with root div
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
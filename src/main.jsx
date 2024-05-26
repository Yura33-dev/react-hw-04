import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import QueryContext from './context/queryContext/queryContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryContext>
      <App />
    </QueryContext>
  </React.StrictMode>
);

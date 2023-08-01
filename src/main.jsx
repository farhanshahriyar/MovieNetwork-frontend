import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import App from './App';
import Auth from './Auth';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth >
      <App />
    </Auth>
  </React.StrictMode>,
);

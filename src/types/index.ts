import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Render aplikasi ke dalam elemen dengan id 'app'
ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

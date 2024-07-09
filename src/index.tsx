import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

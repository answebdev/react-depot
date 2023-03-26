// React 18 Version
import React from 'react';
// import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { hydrate, render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootElement
  );
} else {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootElement
  );
}

reportWebVitals();

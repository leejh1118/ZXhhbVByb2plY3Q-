import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
      <link rel="stylesheet" href="/resources/css/App.css"></link>
    <BrowserRouter basename='/backroom408'>
      <App />
    </BrowserRouter>
  </>
)

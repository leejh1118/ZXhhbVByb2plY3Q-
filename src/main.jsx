import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import '../public/resources/css/App.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter basename='/backroom408'>
      <App />
    </BrowserRouter>
  </>
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import "@/assets/style/global.scss";
import "antd/dist/reset.css";
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </React.StrictMode>,
);

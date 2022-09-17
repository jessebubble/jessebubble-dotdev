import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Viva from './components/vwd';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Portraits from './components/vp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/viva" element={<Viva />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portraits" element={<Portraits />} />
    </Routes>
  </BrowserRouter>
);


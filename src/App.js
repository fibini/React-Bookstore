import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Books-home';
import Categories from './components/Categories';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/categories" element={<Categories />} />
    </Routes>
  </BrowserRouter>
);

export default App;

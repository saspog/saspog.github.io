import { useState } from 'react'
import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

const App = () => (
  <div className='app'>
    <h1>Sasha P.</h1>
    <Navigation />
    <Main />
  </div>
)

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
  </nav>
)

const Main = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
)

export default App
import React from 'react';
import { Route, Routes, Link } from "react-router-dom"
import Home from './Home';
import About from './About';
import Contacts from './Contacts';
import Project from './Project';
import App from '../App';

export function Aside() {
    return (
      <>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/books">Books</Link></li>
          </ul>
        </nav>
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<About />} />
          <Route path="/books" element={<Project />} />
          <Route path="/books" element={<Contacts />} />
        </Routes>
      </>
    )
  }
 

export default Aside;

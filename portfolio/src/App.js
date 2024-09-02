import React from 'react';
import './scss/index.css';
import Header from './Components/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './Components/About';
import Project from './Components/Project';
import Contacts from './Components/Contacts';
import Home from './Components/Home';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/project' element={<Project />} />
            <Route path='/contacts' element={<Contacts />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;

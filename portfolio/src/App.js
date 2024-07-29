import React from 'react';
import './scss/index.css';
import Header from './Components/Header';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;

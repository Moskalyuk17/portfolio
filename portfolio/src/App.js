import React from 'react';
import './scss/index.css';
import Header from './Components/Header';
import Main from './Components/Main';


class App extends React.Component {
  render () {
    return (
        <div className="App">
          <Header />
          <Main />
        </div>
    );
  }
}

export default App;

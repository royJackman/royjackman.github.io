import React from 'react';
import logo from '../../svg/alert.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This page is <strong>under construction!</strong> Please come back later, thank you!
        </p>
        <a
          className="App-link"
          href="https://github.com/royJackman"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github
        </a>
      </div>
    </div>
  );
}

export default App;

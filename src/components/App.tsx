import React from 'react';
import '../css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Please click the button below to proceed.
        </p>
        <button
          className="App-button"
        >
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign in with GitHub
          </a>
        </button>
      </header>
    </div>
  );
}

export default App;

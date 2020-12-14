import React from 'react';
import RepoList from './RepoList/RepoList';
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
          onClick={RepoList}
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

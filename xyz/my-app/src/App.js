import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectSubmissionForm from './ProjectSubmissionForm';

function App() {
  return (
    <div className="App">
      {/* Project Submission Form Component */}
      <ProjectSubmissionForm />

      {/* Default React UI */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Gourav, va yrr chal giye
        </a>
      </header>
    </div>
  );
}

export default App;

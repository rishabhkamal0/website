import React from 'react';
import FileUpload from './components/FileUpload';
import QueryForm from './components/QueryForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Document Upload and Query System</h1>
      </header>
      <main>
        <FileUpload />
        <QueryForm />
      </main>
    </div>
  );
}

export default App;

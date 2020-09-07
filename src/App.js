import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from "./Grid";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid />
      </header>
    </div>
  );
}

export default App;

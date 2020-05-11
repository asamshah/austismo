import React from 'react';
import './App.css';
import FeelingsMenu from './components/FeelingsMenu/FeelingsMenu'
import Schedule from './components/Schedule/Schedule'
import AngryFeeling from './components/AngryFeeling/AngryFeeling'

function App() {
  return (
    <div className="App">
      <h1>First Change</h1>
      <FeelingsMenu />
      <Schedule />
      <AngryFeeling />


    </div>
  );
}

export default App;

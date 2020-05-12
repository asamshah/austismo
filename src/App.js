import React from 'react';
import './App.css';
<<<<<<< HEAD
import FeelingsMenu from './components/FeelingsMenu/FeelingsMenu'
import Schedule from './components/Schedule/Schedule'
import AngryFeeling from './components/AngryFeeling/AngryFeeling'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>First Change</h1>
      
      <FeelingsMenu />
      <Schedule />
      <AngryFeeling />


=======
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
>>>>>>> 6c7d9a739a0004f6669f8c3f2948741d071e367e
    </div>
  )
}

export default App;

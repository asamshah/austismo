import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  )
}

export default App;

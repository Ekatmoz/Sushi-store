import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";
import './App.css';
import About from './Componenets/About';
import Contact from './Componenets/Contact';
import Home from './Componenets/Home';
import Navbar from './Componenets/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

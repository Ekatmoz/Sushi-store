import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";
import './App.css';
import About from './Pages/About';
import Cart from './Componenets/Cart/Cart';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Navbar from './Componenets/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleProduct from './Pages/SingleProduct';
import Login from './Pages/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product' element={<SingleProduct/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

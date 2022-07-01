// import logo from './logo.svg';
// import Button from 'react-bootstrap/Button';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from './Pages';
import Home from './Pages/home';
import About from './Pages/about';
import Calculate from './Pages/calculate';
import Awesomefacts from './Pages/Awesome facts';
import Memes from './Pages/memes';


 function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
        
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/calculate' component={Calculate} />
        <Route path='/memes' component={Memes} />
        <Route path='/Awesome facts' component={Awesomefacts} />
        <Route path='/' exact component={Index} />
    </BrowserRouter>
    
    </>
  
  );
}
export default App;




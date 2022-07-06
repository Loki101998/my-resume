import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbarrr from './Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from './Pages';
import Home from './Pages/home';
import About from './Pages/about';
import Calculate from './Pages/calculate';
import Awesomefacts from './Pages/Awesome facts';
import Memes from './Pages/memes';
import SignUp from './Pages/signup';
import Clone from './Pages/clone/clone';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbarrr />
      <Route path='/home' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/calculate' component={Calculate} />
      <Route path='/memes' component={Memes} />
      <Route path='/Awesome facts' component={Awesomefacts} />
      <Route path='/' exact component={Index} />
      <Route path='/sign-up'  component={SignUp} />
      <Route path='/clone'  component={Clone} />
    </BrowserRouter>
    </>
  );
}
export default App;




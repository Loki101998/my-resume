import React from 'react';
import './App.css';
import Navbarrr from './Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/home';
import About from './Pages/about';
import Calculate from './Pages/calculate';
import Awesomefacts from './Pages/Awesome facts/Awesome facts';
import Memes from './Pages/memes/memes';
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
      <Route path='/' exact component={Home} /> 
      <Route path='/clone'  component={Clone} />
    </BrowserRouter>
    </>
  );
}
export default App;




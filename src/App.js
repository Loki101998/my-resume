// import logo from './logo.svg';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from './Pages';
import Home from './Pages/home';
import About from './Pages/about';
import SignUp from './Pages/signup';
import Awesomefacts from './Pages/Awesome facts';
import Memes from './Pages/memes';


 function numberofsteps(dayswalked,dailySteps)
 {
 let stepCount= 40;
 return function Steps()
 
 {
  stepCount= stepCount+(dailySteps*dayswalked)
  return stepCount;

 }}
 let days = Math.floor(Math.random() * 100) + 1;
const totalnumberofsteps= numberofsteps(days,100)
let b=totalnumberofsteps();

 
 function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Route path='/' exact component={Index} />
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/signup' component={SignUp} />
        <Route path='/memes' component={Memes} />
        <Route path='/Awesome facts' component={Awesomefacts} />
    </BrowserRouter>
    
    </>
  
  );
}
export default App;




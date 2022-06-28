// import logo from './logo.svg';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages';
import About from './Pages/about';
import SignUp from './Pages/signup';


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
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/sign-up' component={SignUp} />
      </Routes>
    </Router>
    
    </>
  
  );
}
export default App;




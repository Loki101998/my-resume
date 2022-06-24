// import logo from './logo.svg';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
let d =new Date()
let h=d.getHours()
let t;
let m=d.getMinutes()
let s=d.getSeconds()
const m1=m/60
const s1=s/3600
const time=h+m1+s1;
let output;
if (time > 3 && time <= 9)
   output="Good Morning"
else if (time > 9 && time <= 15)
   output="Good Afternoon"
else if(time > 15 && time <= 21)
    output="Good Evening"
else
    output="Good Night"
    if(h<12)
    t='AM'
  else 
  {
    h=h-12
    t='PM'
  }   

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
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL+"Loki.jpg"} /> 
        <h1>
         Current Time(IST) : {h}:{m}:{s} {t}
          </h1> 
        <h1>
          {output}
        </h1>
        <p>
          Name : Lokesh.V <br></br> 
          Company : Iksha Labs <br></br>
          Location : Gurgaon <br></br>
          Phone : 7013525217 <br></br>
          Email : lokesh@ikshalabs.com <br></br>
          About me : Developing novel solutions for persisting problems 
        </p>
        <button type="button">Click Me</button>
        {/* <button onClick = {clickMe} >click me</button> */}
        {/* <h1>Total number of steps after {days} days are {b}</h1> */}
        </header>
    </div>
  </>
  );
}
export default App;




import React from 'react';

let d =new Date()
let h=d.getHours()
let t;
let m=d.getMinutes()
let s=d.getSeconds()
const m1=m/60
const s1=s/3600
const time=h+m1+s1;
let output;
if (time > 4 && time < 12)
   output="Good Morning"
else if (time >= 12 && time < 16)
   output="Good Afternoon"
else if(time >= 16 && time <= 19)
    output="Good Evening"
else
    output="Good Night"
    if(h<12)
    t='AM'
  else if(h>= 13)
  {
    h=h-12
    t='PM'
  } 
  else
   t='PM'

const Home = () => {
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
function res(){
  
  document.getElementById("result").innerHTML=totalnumberofsteps();
}
return (
	<div
	style={{
		background:'#ffc107',
		display: 'flex',
		justifyContent: 'Center',
	  alignItems: 'Center',
		height: '100vh',
    //fontStyle: 'italic',
	}}
	>
	  <ul>
	    
        <marquee direction="Left" behavior="alternate" loop="1"
           style={{
                    marginBottom: '400px',
                    fontSize: '30px',
                    color: '#302f2f',
                    fontStyle: 'italic',
                  }} 
        > Welcome to my page 
        </marquee>
		    <h2>
            I'm from India and its {h}:{m} {t} here
        </h2> 
        <h3>
            Well {output} !!           
			  </h3>
        <h4>walking is good and in {days} days i walked 
        </h4>
        <input type="button" onClick={res} value='Find steps'/>
        <h5> Result : <span id = "result" ></span>steps </h5>  
        <p>total steps after {days} days are {b} steps</p>
    </ul>
 </div>
);
};

export default Home;

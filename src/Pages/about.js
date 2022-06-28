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

const About = () => {
return (
	<>
	<div className="App">
      <header className="App-header">
      </header>
    </div>
	<img src="Loki.jpg" /> 
        {/* <img src={process.env.PUBLIC_URL+"Loki.jpg"} />  */}
        <h1>
         Current Time(IST) : {h}:{m}:{s} {t}
          </h1> 
        <h2>
          {output}
        </h2>
        <p>
          Name : Lokesh.V <br></br> 
          Company : Iksha Labs <br></br>
          Location : Gurgaon <br></br>
          Phone : 7013525217 <br></br>
          Email : lokesh@ikshalabs.com <br></br>
          About me : Developing novel solutions for persisting problems 
        </p>
	<div
	style={{
		display: 'flex',
		justifyContent: 'Right',
		alignItems: 'Right',
		height: '100vh'
	}}
	>
	<h1>Hello visitor there is nothing much about me </h1>
	</div>
	</>
);
};

export default About;

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
   h=h
   t='PM'

const About = () => {
return (
	<>
       	<div
	style={{
		 display: 'block',
     marginTop: '70px',
     marginLeft: '500px',
     marginBottom: '30px'
    
	  }}
	>
	     <img src="Loki.jpg" />  
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
        </div>
  </>
);
};

export default About;

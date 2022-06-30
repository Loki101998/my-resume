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
return (
	<div
	style={{
		background:'#33ccff',
		display: 'flex',
		justifyContent: 'Center',
	    alignItems: 'Center',
		height: '90vh'
	}}
	>
	  <ul>
	    <h1>Welcome to my page</h1>
		<h2>
            I'm from India and its {h}:{m} {t} here
          </h2> 
           <h3>
            Well {output} !!           
			</h3>
	</ul>
 </div>
);
};

export default Home;

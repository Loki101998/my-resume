import React from 'react';

const About = () => {
return (
	<>
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
       <img src="Loki.jpg" />  
        <p>
          Name : Lokesh.V <br></br> 
          Company : Iksha Labs <br></br>
          Location : Gurgaon <br></br>
          Phone : 7013525217 <br></br>
          Email : lokesh@ikshalabs.com <br></br>
          About me : Developing novel solutions for persisting problems 
        </p>
        </ul>
        </div>
  </>
);
};

export default About;

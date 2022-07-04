import React from 'react';

const Awesomefacts = () => {
return (
	<div
	style={{
		background:'#33ccff', 
		//display: 'flex',
		justifyContent: 'Center',
		alignItems: 'Center',
		height: '100vh'
		
	}}
	>
		
	<h1>You are at right place to know some mind blowing facts</h1>
    <div
	style={{
		display:'block',
		
	}}
	>
        <p>Its not just rosemilk that's in pink,even Hippopotamus's milk is </p>
        <img src='hippo.jpg' height="150px" width="150px"alt="Hippo" /><hr></hr>
        <p>Snails take the longest naps with some lasting as long as three years.</p>
		<img src="snail.jpg" alt="snail"height="150px" width="150px"/><hr></hr>
        <p>Your brain uses 10 watts of energy to think and does not feel pain.</p>
		<img src="brainfact.jpg" alt="brain fact"height="150px" width="150px"/><hr></hr>
    </div> 
	</div> 
    );
};

export default Awesomefacts;

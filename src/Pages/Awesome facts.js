import React from 'react';

const Awesomefacts = () => {
return (
	<div
	style={{
		background:'',
		padding: '30px',
	    height: '100vh',
	}}
	>
	<h1
	 style={{
		marginLeft:'300px',
	 }}
	>You are at right place to know some mind blowing facts</h1>
    <div
	style={{
		display: 'flex',
		flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
		paddingBottom:'40px',
	}}
	>
        <p>Its not just rosemilk that's in pink,even Hippopotamus's milk is </p>
        <img src='hippo.jpg' height="250px" width="250px"alt="Hippo" />
        <p>Snails take the longest naps with some lasting as long as three years.</p>
		<img src="snail.jpg" alt="snail"height="250px" width="250px"/>
        <p>Your brain uses 10 watts of energy to think and does not feel pain.</p>
		<img src="brainfact.jpg" alt="brain fact"height="250px" width="250px"/>
    </div> 
	</div> 
    );
};

export default Awesomefacts;

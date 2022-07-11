import React from 'react';

const Awesomefacts = () => {
return (
	// <div
	// style={{
	// 	background:'#867982',
	// 	padding: '30px',
	//     height: '140vh',

	// }}
	// >
	// <h1
	//  style={{
	// 	marginLeft:'300px',
	//  }}
	// >You are at right place to know some mind blowing facts</h1>
    // <div
	// style={{
	// 	display: 'flex',
	// 	flexDirection:'column',
    //     justifyContent: 'center',
    //     alignItems: 'center',
	// 	paddingBottom:'40px',
	// }}
	// >
    //     <p>Its not just rosemilk that's in pink,even Hippopotamus's milk is </p>
    //     <img src='hippo.jpg' height="250px" width="250px"alt="Hippo" />
    //     <p>Snails take the longest naps with some lasting as long as three years.</p>
	// 	<img src="snail.jpg" alt="snail"height="250px" width="250px"/>
    //     <p>Your brain uses 10 watts of energy to think and does not feel pain.</p>
	// 	<img src="brainfact.jpg" alt="brain fact"height="250px" width="250px"/>
    // </div> 
	// </div> 
	<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel"
	style={{
		
		padding: '30px',
	    height: '100vh',
	}}
	>
	<div class="carousel-inner">
	  <div class="carousel-item active">
		<img src="hippo.jpg" class="d-block "/>
		<p>Its not just rosemilk that's in pink,even Hippopotamus's milk is </p>
	  </div>
	  <div class="carousel-item">
		<img src="snail.jpg" class="d-block w-95"/>
		<p>Snails take the longest naps with some lasting as long as three years.</p>
	  </div>
	  <div class="carousel-item">
		<img src="brainfact.jpg" class="d-block w-95" />
		<p>Your brain uses 10 watts of energy to think and does not feel pain.</p>
	  </div>
	</div>
	<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
	  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
	  <span class="visually-hidden">Previous</span>
	</button>
	<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
	  <span class="carousel-control-next-icon" aria-hidden="true"></span>
	  <span class="visually-hidden">Next</span>
	</button>
	</div>
    );
};

export default Awesomefacts;

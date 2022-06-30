import React from 'react';

const Calculate = () => {
	function divideBy() 
	{ 
		   let num1 = document.getElementById("firstNumber").value;
		   let num2 = document.getElementById("secondNumber").value;
		   document.getElementById("result").innerHTML = num1 / num2;
	}
   
   function multiplyBy()
   {
		 let num1 = document.getElementById("firstNumber").value;
		 let num2 = document.getElementById("secondNumber").value;
		 document.getElementById("result").innerHTML= num1 * num2;
		 
   }
   
return (
	<div
	style={{
		background:'#33ccff',
		display: 'flex',
		justifyContent: 'Center',
		alignItems: 'Center',
		height: '90vh',
    }}
	>
		<ul>
	<form>
	<p>First Number :</p> <input type="text" id="firstNumber" 
	style={{
		marginBottom: '20px',
	}} 
	/><br></br>
      <p>Second Number:</p>  <input type="text" id="secondNumber" /><br></br>
	<input type="button" onClick={multiplyBy} Value="Multiply" 
	style={{
		marginTop: '20px',
		marginLeft: '5px',
	}}
	/>
	<input type="button" onClick={divideBy} Value="Divide" 
	  style={{
		   marginLeft:'50px',
		}}
	/>
	</form>
	<p
	  style={{
		display: 'flex',
		fontWeight: 'bold',
		fontStyle:'italic',
		marginTop: '20px',
		marginLeft: '10px',
	  }}
	> Result :   <p style={{marginLeft: '10px',}}id = "result" > </p> </p>  
	</ul>
	</div>
);
};
export default Calculate ;

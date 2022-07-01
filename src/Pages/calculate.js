import React from 'react';

const Calculate = () => {
	function divideBy() 
	{ 
		   let num1 = document.getElementById("firstNumber").value;
		   let num2 = document.getElementById("secondNumber").value;
		   let n=num1/num2;
		   document.getElementById("result").innerHTML = n.toFixed(3);
	}
   
   function multiplyBy()
   {
		 let num1 = document.getElementById("firstNumber").value;
		 let num2 = document.getElementById("secondNumber").value;
		 let n=num1*num2;
		 document.getElementById("result").innerHTML= n.toFixed(3);
		 
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
		<div>
	<form>
	<input type="text" placeholder='Enter first number'    id="firstNumber" 
	style={{
		marginBottom: '20px',
		marginLeft: '1px',
		border: '1px solid red',
		padding : '10px',
        borderRadius: '20px',
	}} 
	/><br></br>
    <input type="text" placeholder='Enter second number' id="secondNumber" 
	style={{
		outline: 'none !important',
		background:'#ffffff',
        border: '1px solid red',
		padding : '10px',
        borderRadius: '20px',
	}}/><br></br>
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
	> Result :   <p id = "result" > </p> </p>  
	</div>
	</div>
);
};
export default Calculate ;

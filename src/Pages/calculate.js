import React from 'react';

// function multiplyBy()
// {
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;
//         document.getElementById("result").innerHTML = num1 * num2;
// }

// function divideBy() 
// { 
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;
//         document.getElementById("result").innerHTML = num1 / num2;
// }




const Calculate = () => {
return (
	<div
	style={{
	       marginTop: '200px',
		   marginLeft: '600px',
		}}
	>
	<form>
	1st Number : <input type="text" id="firstNumber" /><br></br>
	2nd Number: <input type="text" id="secondNumber" /><br></br>
	<input type="button" onClick='multiplyBy()' Value="Multiply" />
	<input type="button" onClick="divideBy()" Value="Divide" />
    </form>
	<p>The Result is : <br></br>
    <span id = "result"></span>
	</p>
	</div>
	
);
};

export default Calculate ;

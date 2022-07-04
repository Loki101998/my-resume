import React from 'react';

const SignUp = () => {
return (
	<div
    style={{
        marginLeft: '550px',
    }}
    >
            <p
             style={{
                marginTop: '180px',
                marginLeft: '0px',
                // border: '1px solid red',
		        // padding : '10px',
                // borderRadius: '20px',
            }}
            ><input type="text" placeholder='enter your name'/>
            </p>
            <p><input type="number" placeholder='enter phone number'/>
            </p>
            <label for="birthday">Date of Birth
            </label>
            <input type="date" id="birthday" name="birthday"/>
            <p>Email ID <input type="email" placeholder='enter mail id'/>
            </p>
            <input type="button" Value="click to sign up" />
    </div>     
	
);
};
export default SignUp;

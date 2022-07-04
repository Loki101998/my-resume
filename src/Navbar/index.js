import React from 'react';
import {Nav,NavLink,Bars,NavMenu,} from './NavbarElements';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
		<NavLink to='/home' activeStyle>
			Home
		</NavLink>
        <NavMenu>
		<NavLink to='/Awesome facts' activeStyle>
			Awesome facts
		</NavLink>
		<NavLink to='/memes' activeStyle>
			Memes
		</NavLink>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/calculate' activeStyle>
			Calculate
		</NavLink>
	    <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;

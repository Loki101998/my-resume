import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,

} from './NavbarElements';

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
		<NavLink to='/signup' activeStyle>
			Sign Up
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;

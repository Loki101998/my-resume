import React from 'react';
import {Nav,NavLink,NavItem} from "reactstrap"


const Navbarrr = () => {
return (
	<>
	<div>
  <Nav
    fill
    pills
    tabs
  >
    <NavItem>
      <NavLink
        active
        href='home'
      >
		 Home
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink active href="about">
        About Me
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        active href="Awesome facts"
       >
        Awesome facts
      </NavLink>
    </NavItem>
	<NavItem>
      <NavLink
        active href="calculate"
       >
        Calculate
      </NavLink>
    </NavItem>
	<NavItem>
      <NavLink
        active href="clone"
       >
        Clone site
      </NavLink>
    </NavItem>
	<NavItem>
      <NavLink
        active href="memes"
       >
        Memes
      </NavLink>
    </NavItem>
	<NavItem>
      <NavLink
        active href="sign-up"
       >
        Sign Up
      </NavLink>
    </NavItem>
  </Nav>
</div>

	</>
);
};

export default Navbarrr;



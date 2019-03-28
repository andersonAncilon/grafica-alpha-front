import React from 'react';
import NavBarMenuItem from '../../base/NavBarMenuItem';

const NavBar = ({ navBarConfig }) => (
	<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
		<a className='navbar-brand' href='/'>
			{navBarConfig.title}
		</a>
		<button
			className='navbar-toggler'
			type='button'
			data-toggle='collapse'
			data-target='#navbarNav'
			aria-controls='navbarNav'
			aria-expanded='false'
			aria-label='Toggle navigation'
		>
			<span className='navbar-toggler-icon' />
		</button>

		<div className='collapse navbar-collapse' id='navbarNav'>
			<ul className='navbar-nav ml-auto'>
				{ navBarConfig.navBarMenuItems.map((item, index) => <NavBarMenuItem key={index} menuItemConfig={item}/>) }
			</ul>
		</div>
	</nav>
);

export default NavBar;

import React from 'react';

const NavBarMenuItem = ({menuItemConfig}) => (
	<li className='nav-item active ml-5'>
		<a className='nav-link' href={menuItemConfig.route}>
			{ menuItemConfig.content }
		</a>
	</li>
);

export default NavBarMenuItem;

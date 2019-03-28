import React, { useState } from 'react';

import Login from '../../components/containers/login/Login';
import Register from '../../components/containers/register/Register';

import { Authenticate, IsLogged, Logout } from '../../helpers/AuthController';

function Home() {
	const [ logged, setLogged ] = useState(false);

	function Auth() {
		Authenticate();
		setLogged(IsLogged);
	}

	function Logof() {
		Logout();
		setLogged(IsLogged);
	}

	return (
		<div className='col-12'>
			<h2>Home View</h2>
			<button onClick={() => Auth()}>Login</button>
			<button onClick={() => Logof()}>Logof</button>
			{ console.log(logged) }
		</div>
	);
}

export default Home;

import { useState, useEffect } from 'react';
import './App.css';
import UserCard from './UserCard';

function App() {

	const [users, setUsers] = useState ([]);

	useEffect(() => {
		(async () => {
			let userData;
			try {
				const response = await fetch('https://randomuser.me/api/?results=15');
				userData = (await response.json()).results;
			} catch(error) {
				console.log(error);
				userData = [];
			}

			setUsers(userData);
		})();
	}, []);

  return (
    <div className="App">
		<h1>Perfiles de Usuario</h1>
		<div className='users-container'>
		{users.map((user, index) => (
			<UserCard userData={user} key={index}/>
		))}
		</div>
    </div>
  );
}

export default App;

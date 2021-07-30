import { useState, useEffect } from 'react';
import './App.css';
import UserCard from './components/UserCard';
import Search from './components/Search';

function App() {
	const [allUsers, setAllUsers] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);

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
			setAllUsers(userData);
		})();
	}, []);
	

	const filterUsers = event => {
		const value = event.target.value.toLowerCase();
		setSearchTerm(value);
		if (searchTerm !== "") {
			const filteredUsers = allUsers?.filter(user => (`${user.name.first} ${user.name.last}`.toLowerCase().includes(value)));
			setSearchResults(filteredUsers);
		} else {
			setSearchResults(allUsers);
		}
	};

	const finalList = searchResults.length > 0 ? searchResults : allUsers;

	const deleteUserHandler = (id) => {
		const newList = finalList.filter((item) => item.login.uuid !== id);
		setAllUsers(newList);
		setSearchResults(newList);
	};

  return (
    <div className="App">
		<h1>Perfiles de Usuario</h1>
		<Search inputHandler={filterUsers}/>
		<div className='users-container'>
			{finalList?.map((user, index) => (
				<UserCard userData={user} key={index}  clickHander={deleteUserHandler} />
			))}
		</div>
    </div>
  );
}

export default App;

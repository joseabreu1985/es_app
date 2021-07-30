import './Search.css';
const Search = ({ inputHandler }) => {
	return (
		<div className='filter-users'>
			<input className="search-box" onInput={inputHandler} placeholder="Buscar..."/>
		</div>
	);
};

export default Search;
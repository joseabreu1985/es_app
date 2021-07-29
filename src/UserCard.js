import './UserCard.css';
const UserCard = ({ userData }) => {
	return (
		<div className="perfil">
			<div className="perfil-image"><img src={userData.picture.medium} alt='Imagen de Perfil'/></div>
			<div  className="perfil-body">
				<div className="perfil-title">{userData.name.first} {userData.name.last}</div>
				<div className="perfil-email"><p>{userData.email}</p></div>
			</div>
		</div>
	);
};

export default UserCard;
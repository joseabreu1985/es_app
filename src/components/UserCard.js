import "./UserCard.css";

const UserCard = ({ userData, clickHander }) => {
  return (
    <div className="profile">
      <button
        className="remove"
        type="button"
        onClick={() => clickHander(userData.login.uuid)}
      >
        X
      </button>
      <div className="profile-image">
        <img src={userData.picture.large} alt={userData.name.first} />
      </div>
      <div className="profile-body">
        <div className="profile-title">
          {userData.name.first} {userData.name.last}
        </div>
        <div className="profile-email">
          <p>{userData.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

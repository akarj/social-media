import "./Online.scss";

export default function Online({ user }) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarBottomProfileImgContainer">
        <img
          src={user.profilePicture}
          alt="friend"
          className="rightbarProfileImg"
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
}

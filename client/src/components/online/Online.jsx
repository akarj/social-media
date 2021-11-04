import "./Online.scss";

export default function Online({ user }) {
  console.log(user, "online");
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

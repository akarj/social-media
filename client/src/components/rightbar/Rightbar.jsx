import "./Rightbar.scss";
import { FaBirthdayCake } from "react-icons/fa";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ user }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <FaBirthdayCake className="birthdayIcon" />
          <span className="birthdayText">
            <b>John Wick </b>and <b>3 other friends </b>have birthday today
          </span>
        </div>
        <div className="advertisementImgDiv">
          <img
            src="https://source.unsplash.com/weekly?water"
            alt="advertisement"
            className="rightbarAd"
          />
        </div>
        <h4 className="rightbarBottomTitle">Online Friends</h4>
        <section className="rightbarActiveFriendListContainerSection">
          <ul className="rightbarBottomFriendList">
            {Users.map(user => {
              return <Online key={user.id} user={user} />;
            })}
          </ul>
        </section>
      </>
    );
  };

  const ProfileRightbar = () => {
    const relationship = (() => {
      switch (user.relationship) {
        case 1:
          return "Single";

        case 2:
          return "Married";

        default:
          return "-";
      }
    })();
    return (
      <section className="Profile">
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">{relationship}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friend</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg"
              alt="Followings"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Random Name</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg"
              alt="Followings"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Random Name</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg"
              alt="Followings"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Random Name</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg"
              alt="Followings"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Random Name</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg"
              alt="Followings"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Random Name</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg"
              alt="Followings"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Random Name</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg"
              alt="Followings"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Random Name</span>
          </div>
        </div>
      </section>
    );
  };
  return (
    <div className="rightbarContainer">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

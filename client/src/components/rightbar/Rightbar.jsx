import "./Rightbar.scss";
import { FaBirthdayCake } from "react-icons/fa";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar() {
  return (
    <div className="rightbarContainer">
      <div className="rightbarWrapper">
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
      </div>
    </div>
  );
}

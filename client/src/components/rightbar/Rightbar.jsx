import "./Rightbar.scss";
import { FaBirthdayCake } from "react-icons/fa";

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
            <li className="rightbarFriend">
              <div className="rightbarBottomProfileImgContainer">
                <img
                  src="https://source.unsplash.com/weekly?person"
                  alt="friend"
                  className="rightbarProfileImg"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">John Doe</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarBottomProfileImgContainer">
                <img
                  src="https://source.unsplash.com/weekly?person"
                  alt="friend"
                  className="rightbarProfileImg"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">John Doe</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarBottomProfileImgContainer">
                <img
                  src="https://source.unsplash.com/weekly?person"
                  alt="friend"
                  className="rightbarProfileImg"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">John Doe</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarBottomProfileImgContainer">
                <img
                  src="https://source.unsplash.com/weekly?person"
                  alt="friend"
                  className="rightbarProfileImg"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">John Doe</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarBottomProfileImgContainer">
                <img
                  src="https://source.unsplash.com/weekly?person"
                  alt="friend"
                  className="rightbarProfileImg"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">John Doe</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarBottomProfileImgContainer">
                <img
                  src="https://source.unsplash.com/weekly?person"
                  alt="friend"
                  className="rightbarProfileImg"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">John Doe</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarBottomProfileImgContainer">
                <img
                  src="https://source.unsplash.com/weekly?person"
                  alt="friend"
                  className="rightbarProfileImg"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">John Doe</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarBottomProfileImgContainer">
                <img
                  src="https://source.unsplash.com/weekly?person"
                  alt="friend"
                  className="rightbarProfileImg"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">John Doe</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarBottomProfileImgContainer">
                <img
                  src="https://source.unsplash.com/weekly?person"
                  alt="friend"
                  className="rightbarProfileImg"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">John Doe</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarBottomProfileImgContainer">
                <img
                  src="https://source.unsplash.com/weekly?person"
                  alt="friend"
                  className="rightbarProfileImg"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">John Doe</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

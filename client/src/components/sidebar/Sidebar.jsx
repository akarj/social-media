import "./Sidebar.scss";
// import RssFeed from "@mui/icons-material/RssFeed";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarComponent">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More...</button>
        <hr />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              src="https://source.unsplash.com/32x32/?person"
              alt="p1"
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Name</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="https://source.unsplash.com/32x32/?person"
              alt="p2"
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Name</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="https://source.unsplash.com/32x32/?person"
              alt="p3"
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Name</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="https://source.unsplash.com/32x32/?person"
              alt="p4"
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Name</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="https://source.unsplash.com/32x32/?person"
              alt="p5"
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Name</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="https://source.unsplash.com/32x32/?person"
              alt="p6"
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Name</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="https://source.unsplash.com/32x32/?person"
              alt="p7"
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Name</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="https://source.unsplash.com/32x32/?person"
              alt="p8"
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Name</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

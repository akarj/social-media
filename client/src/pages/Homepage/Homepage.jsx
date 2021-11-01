import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

import "./Homepage.scss";
import Feed from "../../components/feed/Feed";

export default function Homepage() {
  return (
    <>
      <Topbar />
      <div className="homepageContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}

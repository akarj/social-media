import "./ProfilePage.scss";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import Axios from "axios";

export default function ProfilePage() {
  const [user, setUser] = useState();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await Axios.get(`users?username=Kakashi`);
        setUser(response.data);
      } catch (err) {
        console.log(err, "error in getting response Post");
      }
    };
    getUser();
  }, []);

  return (
    <>
      <Topbar />
      <div className="profileContainer">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
                alt="blue and brown steel bridge"
              />
              <img
                className="profileUserImg"
                src={user?.profilePicture}
                alt="silhouette of man illustration"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">A Name</h4>
              <span className="profileInfoDesc">A description</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="Kakashi" />
            {/* <Feed username={user.username} /> */}
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

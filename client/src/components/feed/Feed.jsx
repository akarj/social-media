import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.scss";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedContainer">
        <Share />
        <Post />
      </div>
    </div>
  );
}

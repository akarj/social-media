import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.scss";
import { Posts } from "../../dummyData";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedContainer">
        <Share />
        {Posts.map(post => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}

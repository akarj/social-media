import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.scss";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Feed({ username }) {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      console.log(username === "Kakashi");
      // const response = username
      //   ? //   ? await axios.get("posts/profile/" + username)
      //     await axios.get("http://localhost:5000/api/posts/profile/Kakashi")
      //   : await axios.get("posts/timeline/617bea2a69175a3ef800938e");
      const response = await axios.get(
        "http://localhost:3000/posts/profile/Kakashi"
      );

      setPosts(response.data);
    };
    getPost();
  }, []);

  return (
    <div className="feed">
      <div className="feedContainer">
        <Share />
        {Posts.map(post => {
          return <Post key={`${post._id}`} post={post} />;
        })}
      </div>
    </div>
  );
}

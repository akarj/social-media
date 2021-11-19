import "./Post.scss";
import { MoreVert } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { format } from "timeago.js";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const [user, setUser] = useState({
    username: "",
    profilePicture: "",
  });
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`/users/${post.userId}`);
        // const response = await axios.get(`users?userId=${post.userId}`);
        setUser(response.data);
        console.log("Post worked", response);
      } catch (err) {
        console.log(err, "error in getting response Post");
      }
    };
    getUser();
  }, [post.userId]);

  const likeHandler = () => {
    setLike(prev => (isLiked ? prev - 1 : prev + 1));
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <Avatar src={user.profilePicture} alt={user.username} />
            </Link>

            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert className="verticalHam" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.img} alt={user.username} />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <FavoriteBorderIcon
              className="likeIcon"
              sx={{ color: "red" }}
              onClick={likeHandler}
            />
            <ThumbUpOutlinedIcon
              className="likeIcon"
              sx={{ color: "goldenrod" }}
              onClick={likeHandler}
            />
            <Typography
              className="postLikeCounter"
              variant="body2"
              gutterBottom
              sx={{ fontSize: 15 }}
            >
              {like} people liked it
            </Typography>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">
              {post.comment && `${post.comment} comments`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

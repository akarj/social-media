import "./Post.scss";
import { MoreVert } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { Typography } from "@mui/material";
import { Users } from "../../dummyData";

export default function Post({ post }) {
  const user = Users.filter(user => user.id === post.userId)[0];
  console.log(user.username);
  // console.log(post);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="https://source.unsplash.com/random"
              alt={user.username}
              className="postProfileImg"
            />
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert className="verticalHam" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt={user.username} />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <FavoriteBorderIcon className="likeIcon" sx={{ color: "red" }} />
            <ThumbUpOutlinedIcon
              className="likeIcon"
              sx={{ color: "goldenrod" }}
            />
            <Typography
              className="postLikeCounter"
              variant="body2"
              gutterBottom
              sx={{ fontSize: 15 }}
            >
              {post.like} people liked it
            </Typography>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

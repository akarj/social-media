import "./Post.scss";
import { MoreVert } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { Grid, Typography } from "@mui/material";
export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="https://source.unsplash.com/random"
              alt="Profile"
              className="postProfileImg"
            />
            <span className="postUsername">A NAME</span>
            <span className="postDate">4 hours ago...</span>
          </div>
          <div className="postTopRight">
            <MoreVert className="verticalHam" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">The First Post :)</span>
          <img
            className="postImg"
            src="https://source.unsplash.com/random"
            alt="post"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            {/* <Grid container sx={{ color: "text.primary" }}>
              <Grid item xs={4}> */}
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
              32 people liked it
            </Typography>
            {/* </Grid>
            </Grid> */}
            {/* <span className="postLikeCounter">32 people liked it</span> */}
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

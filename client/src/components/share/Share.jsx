import "./Share.scss";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

export default function Share() {
  return (
    <div className="Share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="https://source.unsplash.com/100x100/?person"
            alt="share"
            className="shareProfileImg"
          />
          <input
            type="text"
            className="shareInput"
            placeholder="Write your thought in the post..."
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video...</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />

              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings...</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}

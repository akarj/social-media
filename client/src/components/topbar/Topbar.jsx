import React from "./Topbar.scss";
import { HiSearch } from "react-icons/hi";
import { BsPersonFill } from "react-icons/bs";
import { SiMessenger } from "react-icons/si";
import { IoMdNotifications } from "react-icons/io";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" className="link">
          <span className="logo">nonMeta</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <HiSearch className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="Search for friend or posts..."
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          {/* <Menu open={true}>
            <MenuItem>
              <IconButton
                size="large"
                aria-label="show person icon"
                color="inherit"
              >
                <Badge badgeContent={1} color="error">
                  <Person />
                </Badge>
              </IconButton>
            </MenuItem>
            <MenuItem>
              <IconButton
                size="large"
                aria-label="show person icon"
                color="inherit"
              >
                <Badge badgeContent={1} color="error">
                  <MessageIcon />
                </Badge>
              </IconButton>
            </MenuItem>
            <MenuItem>
              <IconButton
                size="large"
                aria-label="show person icon"
                color="inherit"
              >
                <Badge badgeContent={1} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </MenuItem>
          </Menu> */}

          <div className="topbarIconItem">
            <BsPersonFill className="icons" id="person" />
            <i className="topbarIconBadge">1</i>
          </div>
          <div className="topbarIconItem">
            <SiMessenger className="icons" id="messages" />
            <i className="topbarIconBadge">1</i>
          </div>
          <div className="topbarIconItem">
            <IoMdNotifications
              className="icons notifications"
              id="notifications"
            />
            <i className="topbarIconBadge">1</i>
          </div>
        </div>
        {/* <img
          src="https://source.unsplash.com/32x32/weekly?person"
          alt="profile"
        /> */}
        <Link to={`/profile/${user.username}`}>
          <Avatar
            alt="Random Profile"
            src="https://source.unsplash.com/32x32/weekly?person"
          />
        </Link>
      </div>
    </div>
  );
}

import React from "./Topbar.scss";
import { HiSearch } from "react-icons/hi";
import { BsPersonFill } from "react-icons/bs";
import { SiMessenger } from "react-icons/si";
import { IoMdNotifications } from "react-icons/io";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <div className="logo">nonMeta</div>
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
          <div className="topbarIconItem">
            <BsPersonFill className="icons" id="person" />
            <i className="topbarIconBadge">1</i>
          </div>
          <div className="topbarIconItem">
            <SiMessenger className="icons" id="messages" />
            <i className="topbarIconBadge">1</i>
          </div>
          <div className="topbarIconItem">
            <IoMdNotifications className="icons" id="notifications" />
            <i className="topbarIconBadge">1</i>
          </div>
        </div>
        <img
          src="https://source.unsplash.com/32x32/weekly?person"
          alt="profile"
        />
      </div>
    </div>
  );
}

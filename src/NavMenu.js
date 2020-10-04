import {
  FlashOn,
  Home,
  LiveTv,
  PersonOutline,
  Search,
  VideoLibrary,
} from "@material-ui/icons";
import React from "react";
import "./NavMenu.css";

function NavMenu() {
  return (
    <div className="navMenu">
      <div className="navMenu_icons">
        <div className="navMenu_icon navMenu_icon--active">
          <Home />
          <p>Home</p>
        </div>
        <div className="navMenu_icon">
          <FlashOn />
          <p>Trending</p>
        </div>
        <div className="navMenu_icon">
          <LiveTv />
          <p>Verified</p>
        </div>
        <div className="navMenu_icon">
          <VideoLibrary />
          <p>Collections</p>
        </div>
        <div className="navMenu_icon">
          <Search />
          <p>Search</p>
        </div>
        <div className="navMenu_icon">
          <PersonOutline />
          <p>Account</p>
        </div>
      </div>
      <img
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png?fit=1280%2C680"
        alt="hulu_logo"
      />
    </div>
  );
}

export default NavMenu;

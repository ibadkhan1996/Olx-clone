import React from "react";
import "./Header.css";
import IconButton from "@material-ui/core/IconButton";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import NotificationsNoneRoundedIcon from "@material-ui/icons/NotificationsNoneRounded";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import AddIcon from "@material-ui/icons/Add";

function Header() {
  return (
    <>
      <nav className="header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/42/OLX_New_Logo.png"
          alt=""
          className="header__logo"
        />
        <div className="header__location">
          <SearchIcon />
          <input
            type="text"
            className="header__inputLocation"
            placeholder="Karachi, Sindh"
          />
          <i className="arrow arrowMarginRight"></i>
        </div>
        <div className="header__search">
          <input
            type="text"
            className="header__inputSearch"
            placeholder="Find Cars, Mobile Phones and more..."
          />
          <SearchIcon className="header__searchIcon" />
        </div>
        <IconButton className="header__chatIcon">
          <ChatBubbleOutlineRoundedIcon />
        </IconButton>
        <IconButton className="header__bellIcon">
          <NotificationsNoneRoundedIcon />
        </IconButton>
        <div className="avatarDiv">
          <Avatar
            alt="Ibad Khan"
            src="https://www.olx.com.pk/amp/static/images/avatar_1.png"
            className="header__avatarIcon"
          />
          <i className="arrow"></i>
        </div>
        <div className="header__buttonDiv">
          <AddIcon />
          <button className="header__sellButton">SELL</button>
        </div>
      </nav>
      <div className="categories">
        <h5>ALL CATEGORIES</h5>
        <i className="arrow"></i>
        <p>Mobile Phones</p>
        <p>Cars</p>
        <p>Motorcycles</p>
        <p>Houses</p>
        <p>TV - Video - Audio</p>
        <p>Tablets</p>
        <p>Land &amp; Plots</p>
      </div>
      <div className="banner"></div>
    </>
  );
}

export default Header;

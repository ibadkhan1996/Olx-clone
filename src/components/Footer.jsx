import React from "react";
import "./Footer.css";
import social from "../images/social.PNG";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__banner"></div>
      <div className="footer__list">
        <div>
          <p>POPULAR CATEGORIES</p>
          <ul>
            <li>Cars</li>
            <li>Flats for rent</li>
            <li>Jobs</li>
            <li>Mobile Phones</li>
          </ul>
        </div>
        <div>
          <p>TRENDING SEARCHES</p>
          <ul>
            <li>Bikes</li>
            <li>Watches</li>
            <li>Books</li>
            <li>Dogs</li>
          </ul>
        </div>
        <div>
          <p>ABOUT US</p>
          <ul>
            <li>About OLX Group</li>
            <li>OLX Blog</li>
            <li>Contact Us</li>
            <li>OLX for Businesses</li>
          </ul>
        </div>
        <div>
          <p>OLX</p>
          <ul>
            <li>Help</li>
            <li>Sitemap</li>
            <li>Legal &amp; Privacy Information</li>
          </ul>
        </div>
        <div>
          <p>FOLLOW US</p>
          <img src={social} alt="" />
        </div>
      </div>
      <div className="footer__footnote">
        <span>
          <strong>Other Countries India</strong> - South Africa - Indonesia
        </span>
        <span>
          <strong>Free Classifieds in Pakistan</strong>. &copy; 2006-2020 OLX
        </span>
      </div>
    </div>
  );
}

export default Footer;

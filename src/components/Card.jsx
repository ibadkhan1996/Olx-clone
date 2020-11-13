import React from "react";
import "./Card.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function Card(props) {
  return (
    <>
      <div className="card">
        <div className="card__body">
          <figure>
            <img src={props.image} alt="" className="card__image" />
          </figure>
          <div className="card__text">
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
            <div className="cardFooter">
              <small>{props.location}</small>
              <small>{props.date}</small>
            </div>
          </div>
          <FavoriteBorderIcon className="cardFavoriteIcon" />
        </div>
      </div>
    </>
  );
}

function CardFeatured(props) {
  return (
    <>
      <div className="card">
        <div className="card__body card__bodyBorder">
          <figure>
            <img src={props.image} alt="" className="card__image" />
          </figure>
          <div className="card__text">
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
            <div className="cardFooter">
              <small>{props.location}</small>
              <small>{props.date}</small>
            </div>
          </div>
          <small className="cardFeaturedIcon">FEATURED</small>
          <FavoriteBorderIcon className="cardFavoriteIcon" />
        </div>
      </div>
    </>
  );
}

export { Card, CardFeatured };

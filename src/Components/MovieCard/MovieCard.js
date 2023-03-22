import React from "react";
import "./MovieCard.css";
const MovieCard = (props) => {
  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/original${
          props.poster ? props.poster : ""
        }`}
        alt=""
      />
      <div className="cardoverlay">
        <div className="card-title">{props.name}</div>
        <div className="release-date">Release Date: {props.releaseDate}</div>
        <div className="star">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";
import "./MoviesList.css";
const MoviesList = () => {
  const [movieType, setMovieType] = useState([]);
  const { type } = useParams();
  const getMovieData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          type ? type : "popular"
        }?api_key=45725f46d53c500c653265279efa95e7`
      )
      .then((res) => {
        setMovieType(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(type);
  };
  useEffect(() => {
    getMovieData();
  }, []);
  useEffect(() => {
    getMovieData();
  }, [type]);

  return (
    <div className="movieslist">
      <h1>
        {type.toUpperCase()} <span> MOVIES</span>{" "}
      </h1>
      <div className="list">
        {movieType.map((movie) => (
          <MovieCard
            key={movie.id}
            poster={movie ? movie.poster_path : ""}
            name={movie ? movie.original_title : ""}
            releaseDate={movie ? movie.release_date : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;

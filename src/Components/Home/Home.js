import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./Home.css";
import MovieCard from "../MovieCard/MovieCard";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  console.log(popularMovies);
  const getPopularMovies = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=45725f46d53c500c653265279efa95e7"
      )
      .then((res) => {
        setPopularMovies(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
  return (
    <div className="home">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {popularMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="poster">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt=""
              />
            </div>
            <div className="overlay">
              <div className="title">{movie ? movie.original_title : ""}</div>
              <div className="desc">
                {movie ? movie.overview.slice(0, 200) : ""}
              </div>
              <div className="releasedate">
                Release Date : <span>{movie ? movie.release_date : ""}</span>
              </div>
              <div className="rating">
                Rating:<span>{movie ? movie.vote_average : ""}</span>
                <div className="star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <a href="#" className="watchnow">
                {" "}
                Watch Now <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="latest">
        <h1 className="title-latest">Latest Movies</h1>
        <div className="new-list">
          {popularMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              poster={movie ? movie.poster_path : ""}
              name={movie ? movie.original_title : ""}
              releaseDate={movie ? movie.release_date : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

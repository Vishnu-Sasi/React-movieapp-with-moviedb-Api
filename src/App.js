import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Error from "./Components/Error/Error";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import MoviesList from "./Components/MoviesList/MoviesList";
import { useState } from "react";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:type" element={<MoviesList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

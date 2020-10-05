import React from "react";
import requests from "./requests";
import "./SubNavMenu.css";

function SubNavMenu({ setSelectedOption }) {
  return (
    <div className="subNavMenu">
      <h2 onClick={() => setSelectedOption(requests.fetchTrending)}>
        Trending
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchTopRated)}>
        Top Rated
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchActionMovies)}>
        Action
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchComedyMovies)}>
        Comedy
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>
        Horror
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>
        Romance
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchMysteryMovies)}>
        Mystery
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchSciFiMovies)}>
        Sci-Fi
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchWesternMovies)}>
        Western
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchAnimationMovies)}>
        Animation
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchTV)}>TV Movies</h2>
    </div>
  );
}

export default SubNavMenu;

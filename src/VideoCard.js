import React, { forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";
const baseURL = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movieName }, ref) => {
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${baseURL}${movieName.backdrop_path || movieName.poster_path}`}
        alt="movie_image"
      />
      {/* <p>{movieName.releaseDate || movieName.first_air_date}</p> */}
      <TextTruncate
        line={2}
        element="p"
        truncateText="..."
        textTruncateChild={<a href="#">Read on</a>}
        text={movieName.overview}
      />
      {/* <p>{movieName.overview}</p> */}
      <h2>{movieName.title || movieName.original_name}</h2>
      <p className="videoCard_stats">
        {/* show movie type if available */}
        {movieName.media_type && `${movieName.media_type} •`}
        {movieName.release_date || movieName.first_air_date}
        {/* Number of Likes */}
        <ThumbUpSharp /> {movieName.vote_count}
      </p>
    </div>
  );
});

export default VideoCard;

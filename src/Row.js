import axios from "axios"
import React, { useEffect, useState, isLargeRow } from 'react'
import YouTube from "react-youtube"
import "./row.css"
import movieTrailer from "movie-trailer"
const baseURL = "https://image.tmdb.org/t/p/w500/"

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState("")
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      console.log(request.data.results)
      setMovies(request.data.results)
      return request
    }
    fetchData()

  }, [fetchUrl])

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,

    }
  }
  const movieHandeler = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("")
    } else {
      movieTrailer(movie?.title || "").then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailerUrl(urlParams.get("v"))
      }).catch((erorr) => console.log(erorr))
    }

  }

  return (
    <div className="row" >
      <h2>{title}</h2>
      <div className='row_posters'>
        {movies.map(movie => (
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            onClick={() => movieHandeler(movie)}
            key={movie.id}
            src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.title}>

          </img>
        ))}

      </div>
      {trailerUrl && < YouTube videoId={trailerUrl} opts={opts} />}



    </div >
  )
}

export default Row

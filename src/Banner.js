import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./banner.css"

const Banner = ({ fetchUrl }) => {
  const [movie, setMovie] = useState([])
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
      return request
    }
    fetchData()


  }, [fetchUrl])
  console.log(movie)
  function truncate (str,n){
    return str?.length>n? str.substr(0,n-1)+"...":str;
  }
  return (
    <header
      className='banner'
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}")`,
        backgroundSize: "cover"
      }}
    >
      <div className='bannar_contents'>
        <h1 className='title'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className='banner_buttons'>
          <button>Play</button>
          <button>My List</button>
        </div>
        <h1 className='banner_description'>{truncate(movie.overview,150) }</h1>
      </div>
      <div className='fade_bottom'></div>

    </header>
  )
}

export default Banner

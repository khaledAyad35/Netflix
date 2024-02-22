import React from 'react'
import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import "./App.css"
import Nav from './Nav'


const App = () => {
  return (
    <div className='app'>
      <Nav />
      <Banner fetchUrl={requests.four} />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.bannerMovies}
        isLargeRow={true} />
      <Row title="Top Rated" fetchUrl={requests.one} isLargeRow={true} />
      <Row title="Action Movies" fetchUrl={requests.three} isLargeRow={true} />
      <Row title="Comedy Movies" fetchUrl={requests.bannerMovies} isLargeRow={true} />
      <Row title="Horror Movies" fetchUrl={requests.four} isLargeRow={true} />

      <Row title="Documentaries" fetchUrl={requests.two} isLargeRow={true} />


    </div>
  )
}

export default App

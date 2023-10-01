import React from 'react'
import './Banner.css'
import SearchBar from '../SearchBar/SearchBar';
const Banner = () => {
  return (
    <div className='banner'>
        <div >
            <div className='banner-text'><b>Bringing Sellers and Shoppers Together on One Platform, Seamlessly</b></div><br />
            <div className='banner-sub-text'><b className='title-name'>SHOP IT. </b>You want it, You got it.</div>
        </div>
        <SearchBar />
    </div>
  )
}

export default Banner
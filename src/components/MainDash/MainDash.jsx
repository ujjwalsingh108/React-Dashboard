import React from 'react'
import './MainDash.css'
import Cards from '../Cards/Cards'
import Report from '../Reports/Report'
import Histogram from '../Histogram/Histogram'
import SearchBar from '../SearchBar/SearchBar'

const MainDash = () => {
  return (
    <div className='MainDash'>
        <SearchBar />
        <Cards />
        <Report />
        <Histogram />
    </div>
  )
}

export default MainDash
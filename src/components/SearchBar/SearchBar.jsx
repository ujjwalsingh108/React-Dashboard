import React from 'react'
import {Input} from 'reactstrap'
import {
    UilBell,
    UilCommentMessage,
    UilSearch
}  from '@iconscout/react-unicons'
import Photo from '../../imgs/img1.png'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className="row Searchbar">
        <div className="col-12 col-md-6 search">
            <span><UilSearch /></span>
            <Input type='text' id='searchbar' name='searchbar' placeholder='Search here...'/>
        </div>
        <div className="col-12 col-md-3 icons">
            <span><UilBell /></span>
            <span><UilCommentMessage /></span>
            <img src={Photo} alt='Photo' />
        </div>
    </div>
  )
}

export default SearchBar
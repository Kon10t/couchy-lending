import React from 'react';
import Lens from './Img/lens.svg';

export default function Search() {

  return (
    <div className='search'>
      <button className='lens-btn'> <img src={Lens} alt='magnifying glass' /> </button>
      <input type="text" name="squery" placeholder="Search Furniture" />
      <button className='search-btn btn-green'><span>Search</span></button>
    </div>
  )
}
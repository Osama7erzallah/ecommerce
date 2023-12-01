import React from 'react'
import header1 from './img/header1.png';
import header2 from './img/header2.png';
import './home.css';
import Categories from '../categories/Categories';
export default function Home() {
  return (
    <>
      <header className='header_img mb-50' >
  <img src= {header1}  alt="header" />
</header>
<div className="categories">
        <Categories/>
</div>
    </>
  )
}

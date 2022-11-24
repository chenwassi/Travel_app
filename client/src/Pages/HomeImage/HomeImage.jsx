import React from 'react'
import {Link} from 'react-scroll'
import HomePage from '../HomePage/HomePage'
import './HomeImage.css'
export default function HomeImage() {

    return ( 
  <div>

    <div className='home-background '>
    <div className=' home-img m-auto '>
    <h1 className='title-HomeImg'>NEVER STOP EXPLORING .</h1>
    <button className='scrollBtn btn btn-outline-md-dark btn-outline-light'><Link to='homePage' spy={true} smooth={true} duration={60}>About</Link></button>
    </div>
    </div>
      <HomePage/>
  </div>
    )
}

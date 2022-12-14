import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../Login/Login'
import './HomeImage.css'
export default function HomeImage() {
  const [modalShow, setModalShow] =useState(false);
  const nameFromLocal = localStorage.getItem('name')
const navigate = useNavigate()
    return ( 
  <div className='login-Image'>
    <div className='home-background'>
    <div className='home-img m-auto '>
    <h1 className='title-HomeImg'>NEVER STOP EXPLORING .</h1>
    <button onClick={() => setModalShow(true)} className='scrollBtn btn btn-outline-md-dark btn-outline-light w-25'>
    <Login show={modalShow}
    onHide={() => setModalShow(false)}
    />Start
    </button>
    </div>
    </div>
      {nameFromLocal?navigate('/HomePage'):null}
  </div>
    )
}

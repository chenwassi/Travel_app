import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddPlace() {
    const [place,setPlace] = useState({name:'',info:'',location:'',coords:'',image:''})
    const navigate = useNavigate()
    const placeData = async (obj)=>{
        return await axios.post(`http://localhost:8800/places`,obj)
    }
    const handleInput = (e)=>{
        setPlace({...place,[e.target.name]:e.target.value})
    }
    console.log(place);

  return (
    <div>
    add places
    <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
    <input onChange={handleInput} name='name' placeholder='name'/>
    <input onChange={handleInput} name='info' placeholder='info'/>
    <input onChange={handleInput} name='location' placeholder='location'/>
    <input onChange={handleInput} name='coords' placeholder='lon'/>
    <input onChange={handleInput} name='coords' placeholder='lat'/>
    <input onChange={handleInput} name='image' placeholder='image'/>
    <button onClick={()=>{placeData(place);navigate('/HomePage')}}>bt</button>
    </div>
    </div>
  )
}

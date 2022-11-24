import React from 'react'
import '../PlacePage/PlacePage.css'
import Comments from '../Comments/Comments'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar'
import MapPath from '../../components/Login/MapPath/MapPath'
import MyVerticallyCenteredModal from '../AddComment/AddComment';
import ReactPlayer from 'react-player'

export default function PlacePage() {
    const navigate = useNavigate()
    const [modalShow, setModalShow] =useState(false);
    const [placeData ,setPlaceData] = useState({image:[''],info:'',location:'',name:'',video:'',text:''})
    const [commentsData ,setCommentsData] = useState([])
    const id = sessionStorage.getItem('placeId')


    const findById = async ()=>{
        const {data} = await axios.get(`http://localhost:8800/places/${id}`)
        setPlaceData(data);
    }
    
    const displayComment = async()=>{
      const {data} = await axios.get(`http://localhost:8800/comments`)
      setCommentsData(data)
    }
    useEffect(()=>{
      findById()
      displayComment()
    },[commentsData])
  return (
      <div className='place-page-container'>
        {/* <Navbar/> */}
        <div className='player d-md-block d-none'>
          <div className='BorderBox  w-100 h-100'></div>
          <div className='border-nav'></div>
          <div className='title'>
           <h1>{placeData.name}</h1>
           <h6>{placeData.info}</h6>
          </div>
          <div className='player-video'>
            {placeData?.video?<ReactPlayer muted={true} controls={false} playing={true} loop={true} width={'100vw'}height={'80vh'} url={placeData?.video}/>:<img className='image-bg'src={placeData?.image[1]} width={'100vw'} height={'100vh'}/>}
        </div>
        </div>
        <div className='Carousel w-100 m-auto  d-md-none d-flex'>
        <Carousel interval={2000} indicators={false} controls={false} fade >
        {placeData?.image.map((item,i)=>{
            return(
            <Carousel.Item key={i}>
              <div className='rounded' style={{backgroundImage:`url(${item})`, backgroundPosition:'center',backgroundSize:'cover', height:'75vh',width:'100vw'}}>
              </div>
              <Carousel.Caption>
                <h3>{placeData.name}</h3>
                <p>{placeData.info}</p>
              </Carousel.Caption>
            </Carousel.Item>
            )
          }
        )}
    </Carousel>
        </div>
    <div className=''>
    <div className='text-container d-flex flex-md-row flex-column-reverse justify-content-around  align-items-md-start align-items-center '>
    <div className='text-page-place fs-5 '> <p>{placeData.text}</p></div>
      <h2 className='title-page-place'>הכירו את 
      <div className='place-text'>{placeData.name}</div>
      <div><MapPath/></div>
      </h2>
    </div>
        {/* <h5> Unread comments(0) </h5> */}
       {commentsData?.map(({_id,placeId,userName,text})=>{
        if(placeId == id){
          return <Comments key={_id} name={userName} text={text} id={_id} />
        }
       })}
        </div>
        <div>

    <Button variant="primary" onClick={() => setModalShow(true)}>
    Launch vertically centered modal
    </Button>

    <MyVerticallyCenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}/>
  
    </div>
    </div>
  )
}

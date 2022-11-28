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
import Footer from "../Footer/Footer";
import MyVerticallyCenteredModal from '../AddComment/AddComment';
import ReactPlayer from 'react-player'
// import PlaceInfo from '../PlaceInfo/PlaceInfo';
import Loading from '../../components/Login/Loading/Loading';

export default function PlacePage() {
    const navigate = useNavigate()
    const [modalShow, setModalShow] =useState(false);
    const [placeData ,setPlaceData] = useState({image:[''],info:'',location:'',name:'',video:'',text:'',ways:'',centers:''})
    const [commentsData ,setCommentsData] = useState([])
    const [displayInfo ,setDisplayInfo] = useState(true)
    const [displayCenters,setDisplayCenters] = useState(false)
    const [displayWays ,setDisplayWays] = useState(false)

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
        <Navbar/>
        <div className='player d-md-block d-none'>
          <div className='BorderBox  w-100 h-100'></div>
          <div className='border-nav'></div>
          <div className='title'>
          <h1>{placeData.name}</h1>
          <h6>{placeData.info}</h6>
          </div>
          <div className='player-video'>
            {placeData?.video?<ReactPlayer muted={true} controls={false} playing={true} loop={true} width={'100vw'}height={'80vh'} url={placeData?.video}/>:<img className='image-bg'src={placeData?.image[1]} width={'80vw'} height={'60vh'}/>}
        </div>
        </div>
        <div className='Carousel w-100 m-auto  d-md-none d-flex'>
        <Carousel interval={2000} indicators={false} controls={false} fade>
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

  <div className ='information-Section d-flex flex-column flex-md-row-reverse col-12 border border-5 rounded '>
        <div className='d-flex flex-md-column flex-row justify-content-around align-items-center col-md-4 col-12 left-information-Section'>
            <h3 className='box box-title border border-2' onClick={()=>{setDisplayInfo(true);setDisplayCenters(false);setDisplayWays(false)}}> הכירו את </h3>
            <h3 className='box box-title border border-2' onClick={()=>{setDisplayCenters(true);setDisplayInfo(false);setDisplayWays(false)}}>מוקדי עניין</h3>
            <h3 className='box box-title border border-2' onClick={()=>{setDisplayWays(true);setDisplayInfo(false);setDisplayCenters(false)}}>דרכי הגעה </h3>
        </div>
        <div className='right-information-Section col-md-4  col-12 centers-dataabs'>
        <div>{displayInfo?<div><h3>{placeData.name}</h3>{placeData.info}</div>:null}
        {displayCenters?placeData.centers.map((val,i)=><ul key={i}><li>{val}</li></ul>):null}
        {displayWays?placeData.ways:null}</div>
        </div>
    </div>

        {/* <h5> Unread comments(0) </h5> */}
       {commentsData?.map(({_id,placeId,userName,text})=>{
        if(placeId == id){
          return <Comments key={_id} name={userName} text={text} id={_id} />
        }
       })}
        </div>
        <div>

    <Button variant="primary m-5 btn btn-success" onClick={() => setModalShow(true)}>
    הוספת תגובה
    </Button>
    <MyVerticallyCenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}/>
    </div>
  <Loading/>
  <Footer/>

    </div>
  )
}

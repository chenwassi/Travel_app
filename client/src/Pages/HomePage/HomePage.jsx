import React, { useEffect,useState} from 'react'
import './HomePage.css'
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'
import CardComponent from '../../components/Login/cardsComponents/card'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Navbar from '../Navbar/Navbar'
import ReactPlayer from 'react-player'
import Button from 'react-bootstrap/Button';


export default function HomePage() {
  const [placeData,setPlaceData] = useState([])
  const navigate = useNavigate()
  const appStore = useSelector(state=>state)
  console.log(appStore);
  const dispatch = useDispatch()
   
    const displayplacesData = async ()=>{
        const {data} = await axios.get('http://localhost:8800/places')
        setPlaceData(data)
        const action= {type:'DISPLAY',payload:data}
        dispatch(action)
    }

    const findById = (id)=>{
    const action = {type:'FINDBYID',payload:id}
    dispatch(action)
    sessionStorage.setItem('placeId',id)
    }
   
    useEffect(()=>{
    displayplacesData()
    },[])
    
  return (
    <div id='homePage'>
      <Navbar/>
      <ReactPlayer youtube muted={true} controls={false} playing={true} loop={true} width={'100vw'}height={'80vh'} url={'https://www.youtube.com/watch?v=LER7lcnzoDU&t=233s&ab_channel=BeautifulRelaxation'}/>

       <Form className="d-flex w-50 m-auto mt-5">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
        </Form>

  <div className='d-md-flex flex-wrap justify-content-around mt-5'>
  {placeData.map(({_id,name,info,location,image,coords})=>{
    
    return(
        <div onClick={()=>{findById(_id)}} key={_id} className='m-2'>
        <CardComponent name={name} info={info} location={location} image={image[0]} coords={coords}/>
        </div>
    ) 
})}
  </div>
  </div>
  )
}

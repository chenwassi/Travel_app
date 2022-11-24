
import axios from 'axios'
import React,{useEffect} from 'react'
import { useState } from 'react'
import Map from 'react-map-gl'

export default function MapPath() {
  const [dataMap,setDataMap] = useState()
    // const mapData =async()=>{
    // const {data} =await axios.get(`https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${myLon}%2C${myLat}%3B${lon}%2C${lat}?alternatives=true&geometries=geojson&language=en&overview=simplified&steps=true&access_token=${process.env.REACT_APP_MAPBOX}`)
    // console.log(data);
    // setDataMap(data)
    // } 
// useEffect(()=>{
//     mapData()
// },[])

        
  return (
    <div>
 
    </div>
  )
}

import MapBoxGeocoder from '@mapbox/mapbox-gl-geocoder'
import { useControl } from 'react-map-gl'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'

const  Geolocoder = ()=> {
  const crul = new MapBoxGeocoder({
    accessToken:process.env.REACT_APP_MAPBOX,
    marker:true,
    collapsed:true
    
  })
  useControl(()=>crul)
  crul.on('result',e=>e.target.result.geometry.coordinates)
  // {
    // const coords = e.target.result.geometry.coordinates
    // return coords
  // })

}
export default Geolocoder;

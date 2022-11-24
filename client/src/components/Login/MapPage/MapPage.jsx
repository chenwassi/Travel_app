import "./MapPage.css";
import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Geolocoder from '../SearchBar/SearchBar'
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import { useParams } from "react-router-dom";
import { Control } from "mapbox-gl";

export default function MapPage() {
  const {lon} = useParams()
  const {lat} = useParams()


  console.log(lon,lat);
  return (
    <div className="Map-page">
    <Map 
         mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        style={{
          width: "100vw",
          height: "100vh",
        }}
        initialViewState={{
          longitude: lon,
          latitude: lat,
          zoom:9
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={lon} latitude={lat} />
        <NavigationControl position="top-left" />
        <FullscreenControl position="top-left"/>
        <GeolocateControl  position="top-left" onGeolocate={true}/>
        <Geolocoder/>
      </Map>
    </div>
  );
}

import React,{useEffect, useState} from 'react'
import axios from "axios";
import CardComponent from "../../Login/cardsComponents/card";
export default function AllPlaces() {
    const [placeData, setPlaceData] = useState([]);

  const displayplacesData = async () => {
    const { data } = await axios.get("http://localhost:8800/places");
    const filterNotRecommended = data.filter(({recommended})=>!recommended)
    console.log(filterNotRecommended);
    setPlaceData(filterNotRecommended);
  };
  const findById = (id) => {
    sessionStorage.setItem("placeId", id);
  };
  useEffect(()=>{
    displayplacesData()
  },[])
  return (
    <div className="d-md-flex flex-wrap justify-content-around mt-5 container">
      {placeData.map(({ _id,name, info, location, image, coords }) => {
          return (
            <div
            onClick={() => {
              findById(_id);
            }}
            key={_id}
            className="m-2"
            >
              <CardComponent
                name={name}
                info={info}
                location={location}
                image={image[0]}
                coords={coords}
                />
            </div>
          );
        })} 
        
    </div>
  )
}

import React, { useEffect, useState } from "react";
import "./HomePage.css";
import axios from "axios";
import CardComponent from "../../components/Login/cardsComponents/card";
import Form from "react-bootstrap/Form";
import Navbar from "../Navbar/Navbar";
import Button from "react-bootstrap/Button";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function HomePage() {
  const [placeData, setPlaceData] = useState([]);
  const [inputValue, setInputValue] = useState({ name: "" });

  const displayplacesData = async () => {
    const { data } = await axios.get("http://localhost:8800/places");
    const topPlaces = data.filter(({recommended})=>recommended)
    console.log(topPlaces);
    setPlaceData(topPlaces);
  };
  const findById = (id) => {
    sessionStorage.setItem("placeId", id);
  };
  const handleInput = (e) => {
    setInputValue({ [e.target.name]: e.target.value });
  };
  console.log(inputValue?.name);
  const filter = async () => {
    if (inputValue?.name == "") {
      displayplacesData();
    } else {
      const placesFilter = placeData.filter(
        (place) =>
          place.name.includes(inputValue?.name) ||
          place.location.includes(inputValue?.name)
      );
      setPlaceData(placesFilter);
    }
  };

  useEffect(() => {
    displayplacesData();
  }, [inputValue?.name]);

  return (
    <div className="home-Page-container ">
      <Navbar />
      <div className="backgroundImage"></div>
      <Form className="d-flex w-50 m-auto mt-5">
        <Button
          className="me-2"
          onClick={() => filter()}
          variant="outline-success"
        >
          Search
        </Button>
        <Form.Control
          type="search"
          onChange={handleInput}
          name="name"
          placeholder="Search"
          className="search-Input "
          aria-label="Search"
        />
      </Form>
      <div className="d-md-flex flex-wrap justify-content-around mt-5 mb-5 container">
        {placeData.map(({ _id, name, info, location, image, coords }) => {
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
      <Outlet/>
      <Footer/>
    </div>
  );
}

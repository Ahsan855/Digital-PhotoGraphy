import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://storage.googleapis.com/afs-prod/media/afs:Medium:8934600039/3000.jpeg"
          alt="First slide"
        />
        <Carousel.Caption className="h-50 my-auto">
          <h1>Fishing the Fisher man</h1>
          <h3>The man catch the fish and go to home.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/1142224.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className="h-50 my-auto">
          <h1>Netural Beauty</h1>
          <h3>Awesome Place and Awesome Photo</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/6245141.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="h-50 my-auto">
          <h1>Sea is Beauty</h1>
          <h3>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;


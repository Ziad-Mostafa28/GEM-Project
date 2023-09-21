import React, { useContext } from "react";
import { homeContext } from "../../store/homeContext";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  const allData = useContext(homeContext);
  const banners = allData.banners;
  return <>
        <Carousel data-bs-theme="dark">
            {banners && banners.map((banner) => 
            <Carousel.Item key={banner.id}>
                <img key={banner.id} src={banner.image}  className="d-block w-100" alt="First slide" />
                <Carousel.Caption>
                    <h5>{banner.title}</h5>
                    <p>{banner.description}</p>
                </Carousel.Caption>
            </Carousel.Item>
            )}
  </Carousel> 
  </>;
};

export default Banner;

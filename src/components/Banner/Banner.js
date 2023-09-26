import React, { useContext } from "react";
import { homeContext } from "../../store/homeContext";
import { Carousel } from "react-bootstrap";
import styles from './banner.module.css'
const Banner = () => {
    
    const allData = useContext(homeContext);
    const banners = allData.banners;

    
    return < div className={`home-banner ${styles.home_banner}`}>
        <Carousel data-bs-theme="dark">
            {banners && banners.map((banner) =>

                <Carousel.Item key={banner.id} >

                    <img key={banner.id} src={banner.image} className="d-block w-100" alt="First slide" />

                    <Carousel.Caption className={`${styles.Caption}`}>
                        <h5 className={`${styles.FontSize_h5}`}>{banner.title}</h5>
                        <p className={`${styles.FontSize_P}`}>{banner.description}</p>

                        <a href="#" className={`${styles.Button}`}>
                            <span> {banner.btn_link} </span>
                        </a>
                    </Carousel.Caption>

                </Carousel.Item>
            )}
        </Carousel>
    </ div>
};

export default Banner;

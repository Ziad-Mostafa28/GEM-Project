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

                    <img key={banner.id} src={banner.image} className={`d-block w-100 ${styles.image_banner}`} alt="First slide" />

                    <div className="container">
                        <Carousel.Caption className={`${styles.Caption}`}>
                            <h5 className={`${styles.FontSize_h5}`}>{banner.title}</h5>
                            <p className={`${styles.FontSize_P}`}>{banner.description}</p>
                            <a href="#" className={`${styles.Button}`}>
                                <span> {banner.btn_link} </span>
                            </a>
                        </Carousel.Caption>
                    </div>

                </Carousel.Item>
            )}
        </Carousel>
        <div className="container">
            <div className="buttons">
                <div className={`firstbutton`}>
                    <a href="#">
                        <button className={`sticky position-fixed fw-bold text-white ${styles.firstSticky}`}>
                            Buy Tickets
                        </button>
                    </a>
                </div>
                <div className={`secondbutton`}>
                    <a href="#">
                        <button className={`sticky position-fixed fw-bold text-white ${styles.seconedSticky}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"> 
                            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" /></svg>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </ div>
};

export default Banner;

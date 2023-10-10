import React, { useContext } from 'react'
import style from './Highlight.module.css'
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { homeContext } from '../../store/homeContext';

const Highlight = () => {

    const NewData = useContext(homeContext);
    const highlights = NewData.highlights;

    return (
        <div className='Highlight my-5'>

            <div className={`${style.Caption} container`}>
                <h3>Highlights</h3>
                <p className={`${style.Caption_p}`}>A look at what’s happening at the GEM</p>
            </div>
            <Swiper
                className={`${style.swiper_container}`}
                modules={[Navigation, A11y]}
                spaceBetween={20}
                slidesPerView={3.4}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    640: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2.5,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3.4,
                        spaceBetween: 30,
                    },
                }}
                loop={true}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}

            >
                {highlights && highlights.map((highlight) =>
                    <SwiperSlide key={highlight.id} className={`${style.swiper_slide}`}>
                        <div className={`${style.Div_Image}`}>
                            <img key={highlight.id} src={highlight.thumbnail} className={`d-block w-100 ${style.imagesss}`} alt="First slide" />
                        </div>
                        <div className={`${style.image_caption}`}>
                            <h4>
                                <span>
                                    {highlight.title}
                                </span>
                            </h4>
                            <p className={`${style.image_paragraph}`}>
                                {highlight.details}
                            </p>
                        </div>
                    </SwiperSlide>

                )}
            </Swiper>
        </div>
    )
}

export default Highlight

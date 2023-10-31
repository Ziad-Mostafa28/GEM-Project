import React from 'react'
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './SwipMuseum.module.css'



const SwipMuseum = ({ data }) => {

    console.log(data, "sdsdsdsds")
    return (

        <>
            <Swiper
                className={`swip ${style.swiper_container}`}
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

            >
                {data && data?.collections?.map((item) =>
                    <SwiperSlide key={item.id} className={`${style.swiper_slide}`}>

                        <div className={` ${style.All_card}`}>
                            <div className={`${style.Top_image_Incard}`}>
                                <div className='img-block'>
                                    <span className={`d-block h-100 ${style.Span_image_card}`}>
                                        <img className='w-100 object-fit-cover' src={item?.thubmnail} />
                                    </span>
                                </div>
                            </div>
                            <div className={`${style.Card_body}`}>
                                <div>
                                    <h4>
                                        <span className={`${style.Icon_span}`}>
                                            <img className=' object-fit-contain' src={item?.icon} />
                                        </span>
                                        <span className={`${style.Card_body_title}`}>
                                            {item?.title}
                                        </span>
                                    </h4>
                                    <p className={`${style.Card_body_Text}`}>
                                        {item?.description.slice(0, 130)}..
                                    </p>
                                </div>
                                <a className={`${style.Link_card}`} href='/'>
                                    <span>Learn More</span>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>

                )}
            </Swiper>

            <div className='text-center mt-4'>
                <a className={`${style.Swip_button}`} href='/'>
                    <span>
                        See All 
                    </span>
                </a>
            </div>
        </>
    )
}

export default SwipMuseum

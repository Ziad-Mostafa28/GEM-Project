import React, { useContext } from 'react'
import { homeContext } from '../../store/homeContext'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import style from './Collections.module.css'

function Collections() {
    const AllCollection = useContext(homeContext);
    const collections = AllCollection.collections;
    return (
        <div className={`mb-4 ${style.Collections}`}>
            <div className={`${style.Caption}`}>
                <h3>Collections</h3>
                <p className={`${style.Caption_p}`}>A closer look at Egyptian culture</p>
            </div>

            <div className='container'>
                <Swiper
                    modules={[Navigation, A11y]}
                    spaceBetween={20}
                    slidesPerView={1}
                    // breakpoints={{
                    //     320: {
                    //         slidesPerView: 1,
                    //         spaceBetween: 15,
                    //     },
                    //     640: {
                    //         slidesPerView: 2.5,
                    //         spaceBetween: 20,
                    //     },
                    //     768: {
                    //         slidesPerView: 3,
                    //         spaceBetween: 20,
                    //     },
                    //     1024: {
                    //         slidesPerView: 3.4,
                    //         spaceBetween: 30,
                    //     },
                    // }}
                    loop={true}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}

                >
                    {collections && collections.map((collection) =>
                        <SwiperSlide key={collection.id}>
                            <div className='ALLDATA d-flex flex-row-reverse align-items-center' >
                                <div className='image col-8 me-4'>
                                    <img key={collection.id} src={collection.thumbnail} className={`d-block w-100 `} alt="First slide" />
                                </div>
                                <div className={`col-3 p-4 ${style.Left_text}`}>
                                    <h4 className={`${style.Style_h4}`}>
                                        <span className={`${style.COLORspan}`}>{collection.title}</span>
                                    </h4>
                                    <p className={`${style.Style_p}`}>
                                        {collection.description}
                                    </p>
                                    <a href='#' className={` ${style.aa}`}> 
                                        <span className='me-2'>Discover More</span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                                <path
                                                    d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
                <div className={`mt-5 text-center container ${style.LASTBUTTON} `}>
                        <a href='#'>
                            <span>See All</span>
                        </a>
                </div>
            </div>
        </div>
    )
}

export default Collections

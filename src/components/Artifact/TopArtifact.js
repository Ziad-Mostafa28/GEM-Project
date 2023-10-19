import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import style from './TopArtifact.module.css'
const TopArtifact = ({ data }) => {

    const [scale, setScale] = useState(1);

    // State for image position
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // Reference to the image element
    const imageRef = useRef(null);

    // Zoom in function
    const handleZoomIn = () => {
        setScale((scale) => scale + 0.1);

    };

    // Zoom out function
    const handleZoomOut = () => {
        setScale((scale) => this.scale - 0.1);
    };
    const handleReset = () => {
        setScale((scale) => 1);
    };

    useEffect(() => {
        const image = imageRef.current;
        let isDragging = false;
        let prevPosition = { x: 0, y: 0 };

        // Mouse down event handler for starting image drag
        const handleMouseDown = (e) => {
            if (e.button === 2) {
                isDragging = true;
                prevPosition = { x: e.clientX, y: e.clientY };
                console.log(e.button, "ssss")
            }
        };

        // Mouse move event handler for dragging the image
        const handleMouseMove = (e) => {
            if (!isDragging) return;
            const deltaX = e.clientX - prevPosition.x;
            const deltaY = e.clientY - prevPosition.y;
            prevPosition = { x: e.clientX, y: e.clientY };
            setPosition((position) => ({
                x: position.x + deltaX,
                y: position.y + deltaY,
            }));
        };

        // Mouse up event handler for ending image drag
        const handleMouseUp = () => {
            isDragging = false;
        };

        // Add event listeners
        image?.addEventListener("mousedown", handleMouseDown);
        image?.addEventListener("mousemove", handleMouseMove);
        image?.addEventListener("mouseup", handleMouseUp);

        // Remove event listeners on component unmount
        return () => {
            image?.removeEventListener("mousedown", handleMouseDown);
            image?.removeEventListener("mousemove", handleMouseMove);
            image?.removeEventListener("mouseup", handleMouseUp);
        };
    }, [imageRef, scale]);



    return (
        <div className='row'>
            <div className='mb-md-0 mb-4 d-flex col-sm-7'>

                <Swiper
                    modules={[Navigation, A11y]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    navigation
                >
                    {data && data?.slides?.map((Allslides) =>
                        <SwiperSlide key={Allslides.id}>
                            <div className={`${style.zoomContainer}`}>
                                <div className='h-100'>
                                    <div className={`${style.icons}`}>
                                        <div onClick={handleZoomIn} className={`${style.firstZoom}`}>
                                            <svg className={`${style.firstSvg}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 448 512">
                                                <path stroke="white" strokeWidth="2" strokeLinecap="round" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                                            </svg>
                                        </div>
                                        <div onClick={handleZoomOut} className={`${style.firstZoom}`}>
                                            <svg className={`${style.firstSvg}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 448 512">
                                                <path stroke="white" strokeWidth="2" strokeLinecap="round" d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" /></svg>
                                        </div>
                                        <div onClick={handleReset} className={`${style.firstZoom}`}>
                                            <svg className={`${style.firstSvg}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 512 512">
                                                <path stroke="white" strokeWidth="2" strokeLinecap="round" d="M344 0H488c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512H24c-13.3 0-24-10.7-24-24V344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z" />
                                            </svg></div>
                                    </div>
                                    <div key={Allslides.id}>
                                        <img key={Allslides.id} src={Allslides.image} className='w-100'
                                            ref={imageRef}
                                            alt=""
                                            style={{
                                                transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                                                cursor: "move",
                                            }}
                                            draggable={false} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
            <div className='mb-md-0 mb-4 col-sm-5'>
                <div className={` mb-4 ${style.mainBoxx_box}`}>
                    <p className={`${style.introduction_Text}`}>
                        GEM Number:
                        <span className={`ps-2 mb-0 ${style.mainBoxx_box_text}`}>
                            {data?.gem_number}
                        </span>
                    </p>
                    <p className={`${style.introduction_Text}`}>
                        Collection:
                        <span className={`ps-2 mb-0 ${style.mainBoxx_box_text}`}>
                            {data.collection?.title}
                        </span>
                    </p>
                    {data?.theme?.title && <p className={`${style.introduction_Text}`}>
                        Theme:
                        <span className={`ps-2 mb-0 ${style.mainBoxx_box_text}`}>
                            {data.theme?.title}
                        </span>
                    </p>}
                    {data?.materials?.title && <p className={`${style.introduction_Text}`}>
                        Materials:
                        <span className={`ps-2 mb-0 ${style.mainBoxx_box_text}`}>
                            {data.materials?.title}
                        </span>
                    </p>
                    }
                    {data?.period?.title && <p className={`${style.introduction_Text}`}>
                        Period:
                        <span className={`ps-2 mb-0 ${style.mainBoxx_box_text}`}>
                            {data.period?.title}
                        </span>
                    </p>
                    }
                    {data?.category?.title && <p className={`${style.introduction_Text}`}>
                        Catagory:
                        <span className={`ps-2 mb-0 ${style.mainBoxx_box_text}`}>
                            {data.category?.title}
                        </span>
                    </p>
                    }
                </div>
            </div>
        </div>
    )
}

export default TopArtifact


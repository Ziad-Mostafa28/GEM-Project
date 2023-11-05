import React from 'react'
import style from './Gemtaps.module.css'
import ShopSec from './ShopSec'


const Gemtaps = ({ data }) => {
    return (

        <>
            <div className={`navbar-collapse d-block ${style.collapse}`} id="bs-example-navbar-collapse-1">
                <ul className={`${style.taps}`}>
                    <li><a href="#mu-dine">Dine</a></li>
                    <li><a href="#mu-shop">Shop</a></li>
                    <li><a href="#mu-play">Play</a></li>
                    <li><a href="#mu-learn">Learn</a></li>
                    <li><a href="#mu-work">Work</a></li>
                </ul>
            </div>

            <section className={`${style.welcome}`} id="mu-dine" >

                <div className='container'>
                    <h3 className={`${style.title_h}`}>
                        {data?.dine_title}
                    </h3>
                    <div className={`${style.mainBoxx_boxx}`}>

                        <p className={`${style.text_p}`}>
                            {data?.dine_description}
                        </p>
                    </div>

                    <div className={`${style.all_data_Card}`}>
                        <div className={`${style.left_data}`}>
                            <div className={`${style.content_Card}`}>
                                <h3 className={`${style.content_title}`}>
                                    {data?.dine_card_title}
                                </h3>
                                <p className={`${style.content_text}`}>
                                    {data?.dine_card_description}
                                </p>
                                <a className={`${style.left_data_link}`}>
                                    <span>
                                        Discover More
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className={`${style.right_data}`}>
                            <span className={`w-100 h-100 ${style.right_data_span}`}>
                                <img className={`object-fit-cover w-100 ${style.right_data_img}`} src={data?.dine_image} />
                            </span>
                        </div>
                    </div>
                </div>


            </section>

            <section className={`${style.Shop}`} id="mu-shop">
                <ShopSec data={data} />
            </section>
        </>
    )
}

export default Gemtaps

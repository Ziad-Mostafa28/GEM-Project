import React from 'react'
import style from './Gemtaps.module.css'


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
                </div>


            </section>

            
        </>
    )
}

export default Gemtaps

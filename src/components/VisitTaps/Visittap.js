import React from 'react'
import style from './visittap.module.css'
const Visittaps = (data) => {
    console.log(data, 'qqqqqqqqqq')
    return (
        <>
            <div class={`navbar-collapse d-block ${style.collapse}`} id="bs-example-navbar-collapse-1">
                <ul class={`${style.taps}`}>
                    <li><a href="#mu-open-hour">Opening Hours</a></li>
                    <li><a href="#mu-book-overview">Tickets</a></li>
                    <li><a href="#mu-author">Visitor Guide</a></li>
                </ul>
            </div>

            <section className={`${style.welcome}`}>
                <div className='container'>
                    <div className={`${style.mainBoxx_boxx}`}>
                        <h4 className={`${style.mainBoxx_box_title}`}>
                            {data.data?.welcome_title}
                        </h4>
                        <p className={`${style.mainBoxx_box_text}`}>
                            {data.data?.welcome_description}
                        </p>
                    </div>
                </div>
            </section>
            <section className={`${style.Open_hour}`} id="mu-open-hour">
                <div className='container'>
                    <h3 className={`${style.title_h}`}>
                        {data.data?.opening_hours_title}
                    </h3>
                    <p className={`${style.text_p}`}>{data.data?.opening_hours_description}</p>
                </div>
            </section>
        </>
    )
}

export default Visittaps

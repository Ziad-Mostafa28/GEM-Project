import React from 'react'
import style from './visittap.module.css'
const Visittaps = (data) => {
    return (
        <>
            <div className={`navbar-collapse d-block ${style.collapse}`} id="bs-example-navbar-collapse-1">
                <ul className={`${style.taps}`}>
                    <li><a href="#mu-open-hour">Opening Hours</a></li>
                    <li><a href="#mu-buy-tickets">Tickets</a></li>
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
                    <div className='position-relative'>
                        <div className='row g-0'>
                            <div className='col-md-9'>
                                <div className='img-block'>
                                    <span className={`h-100 d-block ${style.Open_Span}`}>
                                        <img className={`w-100 object-fit-cover ${style.Image_sty}`} src={data.data?.opening_hours_image} />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={`end-0 ${style.Open_hour_box}`}>
                            <h4 className={`${style.Visit_Right_box}`}>
                                Open Daily
                            </h4>
                            <div className={`${style.watch_clock}`}>
                                <span className={`h-100 d-block ${style.Open_Span}`}>
                                    <img className={`w-100 object-fit-cover `} src='/img/clock (1).png ' />
                                </span>
                            </div>
                            <div className={`${style.Time}`}>
                                <div className={`${style.Top_time}`}>
                                    <div className={`align-items-center row`}>
                                        <div className={`text-start col-3`}>
                                            <span className={`${style.span_times}`}>From:</span>
                                        </div>
                                        <div className={`col-6`}>
                                            <span className={`${style.span_Hourss}`}>
                                                {data.data?.opening_hours_from}
                                            </span>
                                        </div>
                                        <div className={`col-3`}>
                                            <span className={`${style.span_times}`} >
                                                Am
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${style.Bottom_time}`}>
                                    <div className={`align-items-center row`}>
                                        <div className={`text-start col-3`}>
                                            <span className={`${style.span_times}`}>To:</span>
                                        </div>
                                        <div className={`col-6`}>
                                            <span className={`${style.span_Hourss}`}>
                                                {data.data?.opening_hours_to}
                                            </span>
                                        </div>
                                        <div className={`col-3`}>
                                            <span className={`${style.span_times}`} >
                                                pm
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={` pb-0 ${style.Buy_Tickets}`} id="mu-buy-tickets" >
                <div className='container'>
                    <h3 className={`${style.title_h}`}>
                        {data.data?.tickets_title}
                    </h3>
                    <div className={`img-block`}>
                        <span className={`h-100 d-block ${style.Open_Span}`}>
                            <img className={`w-100 object-fit-cover ${style.Image_sty}`} src={data.data?.tickets_image} />
                        </span>
                    </div>
                    <div className={`${style.Text_ticket}`}>
                        <h4 className={`${style.Text_ticket_h4}`}>
                            {data.data?.tickets_card_title}
                        </h4>
                        <p className={`${style.Text_ticket_p}`}>
                            {data.data?.tickets_card_description}
                        </p>
                        <a className={`${style.Card_link}`} href='/'> Buy Ticket </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Visittaps

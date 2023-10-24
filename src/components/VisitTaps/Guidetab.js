import React from 'react'
import style from './Guidetab.module.css'
const Guidetab = ({ data }) => {

    return (
        <>
            <div class={`navbar-collapse d-block ${style.collapse}`} id="bs-example-navbar-collapse-1">
                <ul class={`${style.taps}`}>
                    <li><a href="#mu-Getting-Here-Parking">Getting Here & Parking</a></li>
                    <li><a href="#mu-Gem-Map">Gem Map</a></li>
                    <li><a href="#mu-Health-And-Safety">Health And Safety</a></li>
                    <li><a href="#mu-Tours">Tours</a></li>
                    <li><a href="#mu-autGroup-Visitshor">Group Visits</a></li>
                    <li><a href="#mu-Accessibility">Accessibility</a></li>
                </ul>
            </div>

            <section id='mu-Getting-Here-Parking' className={`${style.Parking}`}>
                <div className='container'>

                    <h4 className={`${style.title_h}`} >
                        {data?.getting_here_title}
                    </h4>
                    <p className={`${style.text_p}`} >
                        {data?.getting_here_description}
                    </p>

                    <div className={`${style.map_guide}`}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d221211.91841686112!2d31.149704000000003!3d29.966891000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584534984a8ad1%3A0x45764c5bc4ec261a!2sThe%20Grand%20Egyptian%20Museum!5e0!3m2!1sen!2sus!4v1698143185440!5m2!1sen!2sus"
                            width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className={`${style.Map_card}`}>
                        <div className='justify-content-around row'>
                            <div className='col-xxl-2 col-md-3'>
                                <div className={`${style.mapCard_box}`}>
                                    <div className={`${style.img_block}`}></div>
                                    <h4 className={`${style.mapCard_box_title}`}>
                                        By Car
                                    </h4>
                                    <p className={`${style.mapCard_box_text}`}>
                                        {data?.by_car_text}
                                    </p>
                                </div>
                            </div>
                            <div className='col-xxl-2 col-md-3'>
                                <div className={`${style.mapCard_box}`}>
                                    <div className={`${style.img_block}`}></div>
                                    <h4 className={`${style.mapCard_box_title}`}>
                                        By Metro
                                    </h4>
                                    <p className={`${style.mapCard_box_text}`}>
                                        {data?.by_metro_text}
                                    </p>
                                </div>
                            </div>
                            <div className='col-xxl-2 col-md-3'>
                                <div className={`${style.mapCard_box}`}>
                                    <div className={`${style.img_block}`}></div>
                                    <h4 className={`${style.mapCard_box_title}`}>
                                        By Bus
                                    </h4>
                                    <p className={`${style.mapCard_box_text}`}>
                                        {data?.by_bus_text}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={`text-center ${style.Map_Card_link}`}>
                        <a href='/' className={`${style.Seconed_Map_Card_link}`}>
                            <span>
                                Get Directions
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            <section id='mu-Gem-Map' className={`${style.Parking}`}>
                <div className='container'>
                    <h4 className={`${style.title_h}`} >
                        {data?.get_map_title_2}
                    </h4>
                    <p className={`${style.text_p}`} >
                        {data?.get_map_description_2}
                    </p>
                    <img className={`img-fluid object-fit-contain w-100`} src={data?.get_map_image} />
                </div>
            </section>

            <section id='mu-Health-And-Safety' className={`${style.Parking}`} >
                <div className="container">
                    <h4 className={`${style.title_h}`} >
                        Health And Safety
                    </h4>
                    <div className='row'>
                        {data && data?.heakthy_and_safty?.map((Health) =>
                            <div className='col-md-6'>
                                <div className={`${style.main_box_drop}`}>
                                    <div className={`mb-4  ${style.accrod}`}>
                                        <div className={` ${style.acrrod_item}`}>
                                            <h2>
                                                <button class={`btn btn-primary ${style.accrod_button}`} type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                    {Health?.title}
                                                </button>
                                            </h2>
                                            <div class="collapse" id="collapseExample">
                                                <div class="card card-body">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section >
        </>
    )
}

export default Guidetab
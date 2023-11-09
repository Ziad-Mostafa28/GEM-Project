import React from 'react'
import { useLocation } from 'react-router-dom';
import style from './ResultMuseum.module.css'



function ResultMuseum() {

    const location = useLocation();
    const data = location.state.data;

    console.log(data);

    return (
        <>
            <section className={`${style.welcome}`}>

                <div className={style.div_image}>
                    <img src='/img/bg.png23.png' className={style.bann_image} />
                </div>


                <div>
                    <div className='container'>
                    </div>
                </div>


            </section>

            <section className={`mt-0 ${style.bottomSection}`}>
                <div className='container'>
                    <p className={`text-start ${style.First_title}`}> Explore the glory of Ancient Egypt through an extensive collection dating from Prehistoric times to the Roman Period, each revealing a unique aspect of the ancient Egyptian civilisation.</p>
                    <div className='row'>
                        {data && data?.map((Allslides) =>
                            <div className={`mb-4 col-md-4 ${style.card_style}`}>
                                <div className={` h-100 ${style.total_card}`}>
                                    <div className='img-block zoomIn h-100 undefined'>
                                        <span className={`d-flex h-100 ${style.First_Bottom_Span}`}>
                                            <img key={Allslides.id} src={Allslides.thumbnail} className={`img-block zoomIn h-100 w-100 undefined`} />
                                        </span>
                                    </div>
                                    <div className={` ${style.text_onCard}`}>
                                        <div className={`${style.Bottom_text}`}>
                                            <h6 className={`${style.Style_H6}`}>
                                                {Allslides?.title}
                                            </h6>
                                            <a href={`/search-result/${Allslides.id}`} className={`${style.New_Links}`}>
                                                See Details
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ResultMuseum

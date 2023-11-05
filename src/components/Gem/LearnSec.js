import React from 'react'
import style from './LearnSec.module.css'

const LearnSec = ({ data }) => {

    return (
        <section className={`${style.learn}`} id="mu-learn">
            <div className='container'>
                <h3 className={`${style.title_h}`}>
                    {data?.learn_title}
                </h3>
                <p className={`${style.text_p}`}>
                    {data?.learn_description}
                </p>
                <div className={`mb-5 mt-5 row`}>
                    {data?.learn_list && data?.learn_list.map((data) =>
                        <div key={data?.id} className='mb-lg-0 mb-4 col-lg-4 col-sm-6'>
                            <div className={`${style.Learn_card}`}>
                                <div className={`img-block zoomIn ${style.Learn_image}`}>
                                    <span className={` h-100 ${style.learn_span}`}>
                                        <img className={`object-fit-cover w-100 ${style.learn_imagess}`} src={data?.image} />
                                    </span>
                                </div>
                                <div className={`${style.Learn_body}`}>
                                    <h4 className={`${style.Learn_H4}`}>
                                        <span className={` ${style.learn_span}`}>
                                            <img className={`${style.learn_imagess}`} src={data?.icon} />
                                        </span>
                                        <span>{data?.title}</span>
                                    </h4>
                                    <p className={`${style.learn_card_body_text}`}>
                                        {data?.description}
                                    </p>
                                    <p className={`${style.learn_link}`}>
                                        <span>Discover More</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default LearnSec

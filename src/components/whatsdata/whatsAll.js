import React from 'react'
import style from './WhatsAll.module.css'


const WhatsAll = ({ data }) => {

    return (
        <>
            <div className='row'>
                <div className='mb-4 col-lg-4 col-md-6'>
                    {data && data.map((data) =>
                        <div key={data.id} className={`${style.whatson_card}`}>
                            <div className='img-block zoomIn undefined'>
                                <span className={`d-flex h-100 ${style.First_Bottom_Span}`}>
                                    <img key={data.id} src={data.thumbnail} className={`img-block zoomIn h-100 w-100 undefined ${style.span_image}`} />
                                </span>
                            </div>
                            <div className={`${style.whatson_card_body}`}>
                                <h5 className={`${style.whatsOnCard_card_body_topTiltle}`}>
                                    {data?.category?.title}
                                </h5>
                                <h4 className={`${style.whatsOnCard_card_body_Seconed_Tiltle}`}>
                                    {data?.title}
                                </h4>
                                <ul className='list-unstyled mb-0 p-0 '>
                                    <li className={`${style.whatsOnCard_card_body_links_li}`}>
                                        From: <span>{data?.event_date_from}</span> To: <span>{data?.event_date_to}</span>
                                    </li>
                                    <li className={`${style.whatsOnCard_card_body_links_li}`}>
                                        Time: <span>{data?.time}</span>
                                    </li>
                                </ul>
                                <p className={`text mt-3 mb-0 fs-6 text-start ${style.whatson_card_text}`}>
                                    {data?.description}
                                </p>
                                <a href='#'  className={`mt-4 h-100 ${style.whatson_card_A}`}>
                                    See More
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </>
    )
}

export default WhatsAll

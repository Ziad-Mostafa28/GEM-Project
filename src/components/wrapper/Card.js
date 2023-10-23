import React from 'react'
import style from './Card.module.css'
const Card = ({ data }) => {


    return (
        <section id="mu-author">
            <div className={`${style.Small_card}`}>
                <div className='container'>
                    <h3>{data?.visitor_guide_title}</h3>
                    <p>{data?.visitor_guide_description}</p>
                    <div className='row'>
                        {
                            data && data?.visitor_guide_list?.map((items) =>
                                <div className='mb-4 col-lg-4 col-md-6'>
                                    <div className={`${style.All_card}`}>
                                        <div className={`${style.Top_image_Incard}`}>
                                            <div className='img-block'>
                                                <span className={`d-block h-100 ${style.Span_image_card}`}>
                                                    <img className='w-100 object-fit-cover' src={items?.image} />
                                                </span>
                                            </div>
                                        </div>
                                        <div className={`${style.Card_body}`}>
                                            <div>
                                                <h4>
                                                    <span className={`${style.Icon_span}`}>
                                                        <img className=' object-fit-contain' src={items?.icon} />
                                                    </span>
                                                    <span className={`${style.Card_body_title}`}>
                                                        {items?.title}
                                                    </span>
                                                </h4>
                                                <p className={`${style.Card_body_Text}`}>
                                                    {items?.description.slice(0, 130)}..
                                                </p>
                                            </div>
                                            <a className={`${style.Link_card}`} href='/'>
                                                <span>Learn More</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Card;




import React from 'react'
import style from './Conservation.module.css'


const Conservation = ({ data }) => {
    return (
        <section className={`${style.welcome}`} id='mu-Conservation-Centre'>
            <div className='container'>
                <h3 className={`${style.title_h3}`}>
                    {data?.conservation_title}
                </h3>

                <div className='All_Box'>
                    <div className='image'>
                        <div className='h-100 img-full'>
                            <span className={`w-100 h-100 ${style.Span_image}`}>
                                <img className={`object-fit-cover w-100 ${style.imagee}`} src={data?.conservation_image} />
                            </span>
                        </div>
                    </div>

                    <div className={`${style.content_box}`}>
                        <h3 className={`${style.Box_title}`}>
                            {data?.conservation_title}
                        </h3>
                        <p className={`${style.Box_description}`}>
                            {data?.conservation_description}
                        </p>
                        <a className={`${style.link_button}`}>
                            <span className={`${style.link_span}`}>
                                Learn More
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Conservation

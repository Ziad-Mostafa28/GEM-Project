import React from 'react'
import style from './WhatsAll.module.css'


const WhatsAll = ({ data }) => {

    return (
        <>
            <div className='row'>
                <div className='mb-4 col-lg-4 col-md-6'>
                    {data && data.map((data) =>
                        <div key={data.id} className={`${style.whatson_card}`}>
                            <div className='img-block zoomIn h-100 undefined'>
                                <span className={`d-flex h-100 ${style.First_Bottom_Span}`}>
                                    <img key={data.id} src={data.thumbnail} className={`img-block zoomIn h-100 w-100 undefined ${style.span_image}`} />
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </>
    )
}

export default WhatsAll

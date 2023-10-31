import React from 'react'
import style from './Accessibility.module.css'


const Accessibility = ({ data }) => {
    return (
        <section className={`${style.Access}`}>
            <div className='container'>
                <h3 className={`${style.title_H}`}>Accessibility</h3>
            </div>
            <div className='row'>
                <div className='mb-md-0 mb-4 col-md-6'>
                    <div className='transform_Box'>
                        <div className='transformBox_img'>
                            <div className='img-block img-full h-100'>
                                <span className={`w-100 d-block h-100 ${style.img_span}`}>
                                    <img className={`w-100 object-fit-cover ${style.image}`} src={data?.accessibility_left_image} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mb-md-0 mb-4 col-md-6'></div>
            </div>
        </section>
    )
}

export default Accessibility

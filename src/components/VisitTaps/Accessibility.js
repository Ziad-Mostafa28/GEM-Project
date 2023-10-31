import React from 'react'
import style from './Accessibility.module.css'


const Accessibility = ({ data }) => {
    return (
        <section className={`${style.Access}`}>
            <div className='container'>
                <h3 className={`${style.title_H}`}>Accessibility</h3>
                <div className={`mb-4 ${style.top_main_box}`}>
                    <h3 className={`${style.top_main_box_H}`}> {data?.accessibility_title}</h3>
                    <p className={`${style.top_main_box_p}`}>{data?.accessibility_description}</p>
                </div>
            </div>
            <div className='row w-100 m-0'>
                <div className='mb-md-0 mb-4 col-md-6 ps-0'>
                    <div className='transform_Box'>
                        <div className='Box_img'>
                            <div className={`h-100`}>
                                <span className={`d-block w-100 h-100 ${style.Box_img_span}`}>
                                    <img className={`w-100 object-fit-cover ${style.Box_img_image}`} src={data?.accessibility_left_image} />
                                </span>
                            </div>
                        </div>
                        <div className={`transformBox_content ${style.transformBox_content}`}>
                            <p className={`${style.transformBox_content_text}`}>
                                {data?.accessibility_left_pharagraph}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mb-md-0 mb-4 col-md-6 pe-0'>
                    <div className='transform_Box'>
                        <div className='Box_img'>
                            <div className={`h-100`}>
                                <span className={`d-block w-100 h-100 ${style.Box_img_span}`}>
                                    <img className={`w-100 object-fit-cover ${style.Box_img_image}`} src={data?.accessibility_right_image} />
                                </span>
                            </div>
                        </div>
                        <div className={`transformBox_content ${style.transformBox_content}`}>
                            <p className={`${style.transformBox_content_text}`}>
                                {data?.accessibility_right_pharagraph}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Accessibility

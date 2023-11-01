import React from 'react'
import style from './ChildMuseum.module.css'


const ChildMuseum = ({ data }) => {
    return (
        <>
            <section className={`${style.welcome}`}>

                {/* <div className='container'>
                    <h3 className={`${style.title}`}>
                        {data?.children_title}
                    </h3>
                    <p className={`${style.children_description}`}>
                        {data?.children_description}</p>

                    <div className='child_box'>

                    </div>
                </div> */}
                <div className='my-5'>
                    <div className='container mb-5'>
                        <div className={`${style.Caption}`}>
                            <h3>{data?.children_title}</h3>
                            <p className={`${style.Caption_p}`}> {data?.children_description}</p>
                        </div>
                        <div className={`d-flex ${style.ExperianceGap}`}>
                            <div className='Left col-lg-6 col-sm-12'>
                                <div className='overflow-hidden'>
                                    <div key={data?.id} className={`position-relative `}>
                                        <img className={`w-100 ${style.left_img} ${style.div_image}`} src={data?.children_image_1} alt="experiencess" />
                                        <div className={`position-absolute bottom-0 left-0 ${style.Right_IMAge}`} >
                                            <h3 className={`fs-5 ${style.TEXT_h3}`}>{data?.children_title_1}</h3>
                                            <p className={` ${style.TEXT_P}`}>{data?.children_description_1}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='right col-lg-6 col-sm-12'>
                                <div className={`${style.right_gap}`}>

                                    <div key={data.id} className='position-relative overflow-hidden'>
                                        <img className={`w-100 ${style.div_image}`} src={data.children_image_2} alt="experience" />
                                        <div className={`position-absolute bottom-0 left-0 ${style.Right_IMAge}`} >
                                            <h3 className={`fs-5 ${style.TEXT_h3}`}>{data.children_title_2}</h3>
                                            <p className={`${style.TEXT_P}`}>{data.children_description_2}</p>
                                        </div>
                                    </div>

                                </div>
                                <div className={`${style.right_gap}`}>

                                    <div key={data.id} className='position-relative overflow-hidden'>
                                        <img className={`w-100 ${style.div_image}`} src={data.children_image_3} alt="experience" />
                                        <div className={`position-absolute bottom-0 left-0 ${style.Right_IMAge}`} >
                                            <h3 className={`fs-5 ${style.TEXT_h3}`}>{data.children_title_3}</h3>
                                            <p className={`${style.TEXT_P}`}>{data.children_description_3}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className={`my-5 ${style.LastButton}`}>
                            <a href='#'>
                                Discover More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ChildMuseum

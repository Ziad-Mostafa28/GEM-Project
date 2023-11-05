import React from 'react'
import style from './WorkSec.module.css'
const WorkSec = ({ data }) => {

    return (

        <section className={`${style.work}`}>
            <div className='container'>
                <h3 className={`${style.title_h}`}>
                    {data?.work_title}
                </h3>
                <p className={`${style.text_p}`}>
                    {data?.work_description}
                </p>
            </div>
            <div className='overflow-hidden'>
                <div className='row'>
                    {data?.work_list && data?.work_list.map((data) =>
                        <div key={data?.id} className='col-md-6'>
                            <div className={`${style.transformBox}`}>
                                <div className={`${style.transformBox_img}`}>
                                    <div className='h-100 '>


                                        <div className='img-block img-full'>
                                            <span className={`w-100 h-100 ${style.work_span}`}>
                                                <img className={` w-100 h-100${style.work_image}`} src={data?.image} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${style.transformBox_content}`}>
                                    <h4 className={`${style.transformBox_content_title2}`}>
                                        {data?.title}
                                    </h4>
                                    <p className={`${style.transformBox_content_text}`}>
                                        {data?.description}
                                    </p>
                                    <a className={`${style.Work_Link}`} href='/'>
                                        <span>{data?.learn_more}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default WorkSec

import React from 'react'
import style from './PlaySec.module.css'

const PlaySec = ({ data }) => {

    return (
        <section className={`${style.Play}`}>

            <div className='container'>

                <h3 className={`${style.title_h}`}>
                    {data?.play_title}
                </h3>
                <div className={`${style.mainBoxx_boxx}`}>

                    <p className={`${style.text_p}`}>
                        {data?.play_description}
                    </p>
                </div>

                <div>
                    <div className='row'>
                        {data?.play_list && data?.play_list.map((data) =>
                            <div key={data.id} className='col-md-6'>
                                <a className={`${style.playLink}`} href='/'>
                                    <div className={`${style.Big_Card}`}>
                                        <div className={`img-block zoomIn ${style.play_card}`}>
                                            <div className={`${style.play_content}`}>
                                                <h4 className={`${style.Play_H4}`}>
                                                    {data?.title}
                                                </h4>
                                                <p className={`${style.Play_P}`}>
                                                    {data?.description}
                                                </p>
                                            </div>
                                            <div className={`img-block zoomIn`}>
                                                <span className={`w-100 h-100${style.play_span}`}>
                                                    <img className={`w-100 h-100 ${style.play_image}`} src={data?.image}/>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default PlaySec

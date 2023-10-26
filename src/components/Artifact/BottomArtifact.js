import React from 'react'
import style from './BottomArtifact.module.css'
const BottomArtifact = ({ data }) => { 
    return (
        <section className={`mt-0 ${style.bottomSection}`}>
            <h3 className={`text-start ${style.First_title}`}> Related Artefacts</h3>
            <div className='row'>
                {data && data?.related_artfacts?.map((Allslides) =>
                    <div className='mb-4 col-md-4'>
                        <div className={` h-100 ${style.total_card}`}>
                            <div className='img-block zoomIn h-100 undefined'>
                                <span className={`d-flex h-100 ${style.First_Bottom_Span}`}>
                                    <img key={Allslides.id} src={Allslides.thumbnail} className={`img-block zoomIn h-100 w-100 undefined`} />
                                </span>
                            </div>
                            <div className={` ${style.text_onCard}`}>
                                <div className={`${style.Bottom_text}`}>
                                    <h6 className={`${style.Style_H6}`}>
                                        {Allslides?.title}
                                    </h6>
                                    <a href={`/search-result/${Allslides.id}`} className={`${style.New_Links}`}>
                                        See Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                )}
            </div>
        </section>
    )
}

export default BottomArtifact

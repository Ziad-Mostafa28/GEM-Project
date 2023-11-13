import React from 'react'
import { useLocation } from 'react-router-dom';
import style from './ResultMuseum.module.css'
import Category from '../../components/Filter/Category';
import Period from '../../components/Filter/Period';
import Material from '../../components/Filter/Material';
import Provenance from '../../components/Filter/Provenance';
import Gallery from '../../components/Filter/Gallery';
import Theme from '../../components/Filter/Theme';



function ResultMuseum() {

    const location = useLocation();
    const data = location.state.data;

    console.log(data);

    return (
        <>
            <section className={`${style.welcome}`}>

                <div className={style.div_image}>
                    <img src='/img/bg.png23.png' className={style.bann_image} />
                </div>


                <div className={style.seconed_div}>
                    <div className='h-100 container'>
                        <h3 className={style.div_h3}>Collections Search</h3>
                        <form>
                            <div>
                                <div className='row'>
                                    <div className='mb-md-5 mb-4 col-md-4 col-sm-6'>
                                        <div className='w-100'>
                                            <label className={style.labells}>
                                                Category
                                            </label>
                                            <Category />
                                        </div>
                                    </div>
                                    <div className='mb-md-5 mb-4 col-md-4 col-sm-6'>
                                        <div className='w-100'>
                                            <label className={style.labells}>
                                                Period
                                            </label>
                                            <Period />
                                        </div>
                                    </div>
                                    <div className='mb-md-5 mb-4 col-md-4 col-sm-6'>
                                        <div className='w-100'>
                                            <label className={style.labells}>
                                                Material
                                            </label>
                                            <Material />
                                        </div>
                                    </div>
                                    <div className='mb-md-5 mb-4 col-md-4 col-sm-6'>
                                        <div className='w-100'>
                                            <label className={style.labells}>
                                                Provenance
                                            </label>
                                            <Provenance />
                                        </div>
                                    </div>
                                    <div className='mb-md-5 mb-4 col-md-4 col-sm-6'>
                                        <div className='w-100'>
                                            <label className={style.labells}>
                                                Gallery
                                            </label>
                                            <Gallery />
                                        </div>
                                    </div>
                                    <div className='mb-md-5 mb-4 col-md-4 col-sm-6'>
                                        <div className='w-100'>
                                            <label className={style.labells}>
                                                Theme
                                            </label>
                                            <Theme />
                                        </div>
                                    </div>
                                    <div className='mb-sm-0 mb-4 col-md-8 col-sm-6'>
                                        <div className='w-100'>
                                            <input className={style.collection_search} type='text' id='keyword' placeholder='keyword' />
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-sm-6'>
                                        <div className='d-flex h-100 justify-content-between'>
                                            <button className={style.search_button} >
                                                Search
                                            </button>
                                            <button className={style.clear_pointer}>
                                                Clear
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


            </section>


            <section className={`mt-0 ${style.bottomSection}`}>
                <div className='container'>
                    <p className={`text-start ${style.First_title}`}> Explore the glory of Ancient Egypt through an extensive collection dating from Prehistoric times to the Roman Period, each revealing a unique aspect of the ancient Egyptian civilisation.</p>
                    <div className='row'>
                        {data && data?.map((Allslides) =>
                            <div className={`mb-4 col-md-4 ${style.card_style}`}>
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
                </div>
            </section>
        </>
    )
}

export default ResultMuseum

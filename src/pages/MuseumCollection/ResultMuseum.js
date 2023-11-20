import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import style from './ResultMuseum.module.css'
import Category from '../../components/Filter/Category';
import Period from '../../components/Filter/Period';
import Material from '../../components/Filter/Material';
import Provenance from '../../components/Filter/Provenance';
import Gallery from '../../components/Filter/Gallery';
import Theme from '../../components/Filter/Theme';



const ResultMuseum = () => {
    const location = useLocation();
    const data = location?.state?.data;

    const [collectiondata, setCollectionData] = useState()

    const [catValue, setCatValue] = useState()
    const [gallValue, setGallValue] = useState()
    const [perValue, setPerValue] = useState()
    const [matValue, setMatValue] = useState()
    const [provValue, setProvValue] = useState()
    const [themValue, setThemValue] = useState()

    const categoryValue = (val) => {
        setCatValue(val);
    }
    const periodValue = (val) => {
        setPerValue(val);
    }
    const galleryValue = (val) => {
        setGallValue(val);
    }
    const materialValue = (val) => {
        setMatValue(val);
    }
    const provenanceValue = (val) => {
        setProvValue(val);
    }
    const ThemeValue = (val) => {
        setThemValue(val);
    }

    const fetchData = async (e) => {
        e.preventDefault()
        return await fetch(`https://uat-iconcreations.com/2022/gem/public/api/web/museum/collections/filter?keyword=&category_id=${catValue ? `&category_id=${catValue}` : ''}
        &period_id=${perValue ? `&period_id=${perValue}` : ''}
        &material_id=${matValue ? `&material_id=${matValue}` : ''}
        &provenance_id=${provValue ? `&provenance_id=${provValue}` : ''}
        &gallery_id=${gallValue ? `&gallery_id=${gallValue}` : ''}
        &theme_id=${themValue ? `&theme_id=${themValue}` : ''}`
        )
            .then((response) => response.json())
            .then((data) => setCollectionData(data));
    }

    const slide = (artifact) => {
        return (
            <div className={`mb-4 col-md-4 ${style.card_style}`}>
                <div className={` h-100 ${style.total_card}`}>
                    <div className='img-block zoomIn h-100 undefined'>
                        <span className={`d-flex h-100 ${style.First_Bottom_Span}`}>
                            <img key={artifact.id} src={artifact.thumbnail} className={`img-block zoomIn h-100 w-100 undefined`} />
                        </span>
                    </div>
                    <div className={` ${style.text_onCard}`}>
                        <div className={`${style.Bottom_text}`}>
                            <h6 className={`${style.Style_H6}`}>
                                {artifact?.title}
                            </h6>
                            <a href={`/search-result/${artifact.id}`} className={`${style.New_Links}`}>
                                See Details
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            <section className={`${style.welcome}`}>

                <div className={style.div_image}>
                    <img src='/img/bg.png23.png' className={style.bann_image} />
                </div>

                <div className={style.seconed_div}>
                    <div className='h-100 container'>
                        <h3 className={style.div_h3}>Collections Search</h3>
                        <form onSubmit={fetchData}>
                            <div>
                                <div className='row'>
                                    <div className='mb-md-5 mb-4 col-md-4 col-sm-6'>
                                        <div className='w-100'>
                                            <label className={style.labells}>
                                                Category
                                            </label>
                                            <Category categoryValue={categoryValue} />
                                        </div>
                                    </div>
                                    <div className='mb-md-5 mb-4 col-md-4 col-sm-6'>
                                        <div className='w-100'>
                                            <label className={style.labells}>
                                                Period
                                            </label>
                                            <Period periodValue={periodValue} />
                                        </div>
                                    </div>
                                    <div className='mb-md-5 mb-4 col-md-4 col-sm-6'>
                                        <div className='w-100'>
                                            <label className={style.labells}>
                                                Material
                                            </label>
                                            <Material materialValue={materialValue} />
                                        </div>
                                    </div>
                                    <div className='mb-md-5 mb-4 col-md-4 col-sm-6'>
                                        <div className='w-100'>
                                            <label className={style.labells}>
                                                Provenance
                                            </label>
                                            <Provenance provenanceValue={provenanceValue} />
                                        </div>
                                    </div>
                                    <div className='mb-md-5 mb-4 col-md-4 col-sm-6'>
                                        <div className='w-100'>
                                            <label className={style.labells}>
                                                Gallery
                                            </label>
                                            <Gallery galleryValue={galleryValue} />
                                        </div>
                                    </div>
                                    <div className='mb-md-5 mb-4 col-md-4 col-sm-6'>
                                        <div className='w-100'>
                                            <label className={style.labells}>
                                                Theme
                                            </label>
                                            <Theme ThemeValue={ThemeValue} />
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

                        {collectiondata ? collectiondata.data.length > 0 ? collectiondata.data?.map((Allslides) => slide(Allslides)) : "There is no result matching your search!"
                            : data && data?.map((Allslides) => slide(Allslides))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ResultMuseum

import React, { useEffect, useState } from 'react'
import endPoints, { httpData } from '../../store/Alldata';
import style from './MuseCollection.module.css'
import TopImage from '../../components/wrapper/TopImage';
import MuseumSearch from './MuseumSearch';

const MuseCollection = () => {

    const [musecollection, setMusecollection] = useState([]);

    useEffect(() => {
        async function getmusecollection() {
            const response = await httpData.get(endPoints.museumCollection);
            setMusecollection(response.data.data);
        }
        getmusecollection();
    }, []);

    return (
        <>
            <section >

                <TopImage>
                    <span>
                        <img src={musecollection.banner_image} />
                    </span>
                    <div>
                        <div className='container'>
                            <h3>
                                <a href='#'>
                                    <span className={`${style.spsp}`}>Gem -  What's on |</span> <span className={`${style.spsp}`}>{musecollection.banner_title}</span> </a>
                            </h3>
                            <p>
                                {musecollection.banner_description}

                            </p>
                        </div>
                        {/* <form className={`${style.Search_searchBar}`}>
                            <div className='container'>
                                <div className={`${style.search_search_group}`}>
                                    <div className={`${style.search_search_group_div}`}>
                                        <input className={`${style.search_search_group_controlForm}`} type='search' placeholder='Search' id='collectionSearch' />
                                        <button className={`${style.search_search_group_link}`} aria-label='collectionSearch' id='searchSubmit'>
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form> */}
                        <MuseumSearch />
                    </div>
                </TopImage>

            </section>

            <section className={`${style.seconed_section}`}>
                <div className='container'>
                    <div className={`navbar-collapse d-block ${style.collapse}`} id="bs-example-navbar-collapse-1">
                        <ul className={`${style.taps}`}>
                            {/* <li><a href="#">Hanging Obelisk</a></li>
                    <li><a href="#">Grand Hall</a></li>
                    <li><a href="#">Tutankhamun Galleries</a></li>
                    <li><a href="#">Main Galleries</a></li>
                    <li><a href="#">Khufu's Boats</a></li>
                    <li><a href="#">Temporary Exhibitions</a></li> */}

                            {musecollection?.collections && musecollection?.collections.map((data) =>
                                <li><a href='#'>{data?.title}</a></li>
                            )}

                        </ul>
                    </div>
                </div>
            </section>


            {musecollection?.collections && musecollection?.collections.map((data) =>
                <section id={data?.id} className={`${style.third_section}`}>
                    <div className='container'>
                        <div className={`${style.cardd}`}>
                            <div className={`${style.cardd_image}`}>
                                <span className={`${style.cardd_image_span}`}>
                                    <img className={`object-fit-cover w-100`} src={data?.thubmnail} />
                                </span>
                            </div>
                            <div className={`${style.card_card_box}`}>
                                <h4 className={`${style.top_title}`}>
                                    <span className={`${style.cardd_image_icon}`}>
                                        <img className={`object-fit-contain ${style.iconss}`} src={data?.icon} />
                                    </span>
                                    <span className={`${style.card_tit}`}>{data?.title}</span>
                                </h4>
                                <p className={`${style.description_data}`}>
                                    {data?.description}
                                </p>
                                <a className={`${style.search_search_group_link}`} aria-label='collectionSearch' id='searchSubmit'>
                                    Search
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>

    )
}

export default MuseCollection

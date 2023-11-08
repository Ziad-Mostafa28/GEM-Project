import React, { useEffect, useState } from 'react'
import endPoints, { httpData } from '../../store/Alldata';
import style from './MuseCollection.module.css'
import TopImage from '../../components/wrapper/TopImage';

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
                    <form className={`${style.Search_searchBar}`}>
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
                    </form>
                </div>
            </TopImage>
        </section>
    )
}

export default MuseCollection

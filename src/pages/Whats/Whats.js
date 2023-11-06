import React, { useEffect, useState } from 'react'
import endPoints, { httpData } from '../../store/Alldata';
import TopImage from '../../components/wrapper/TopImage';
import style from './Whats.module.css'

const Whats = () => {

    const [whatsdata, setwhatsdata] = useState([]);

    useEffect(() => {
        async function getwhatsData() {
            const response = await httpData.get(endPoints.whats);
            setwhatsdata(response.data.data);
        }
        getwhatsData();
    }, []);

    return (

        <div>
            <TopImage>
                <span>
                    <img src={whatsdata.banner_image} />
                </span>
                <div>
                    <div className='container'>
                        <h3>
                            <a href='#'>
                                <span className={`${style.spsp}`}>Gem -  What's on |</span> <span className={`${style.spsp}`}>{whatsdata.banner_title}</span> </a>
                        </h3>
                        <p>
                            {whatsdata.banner_description}

                        </p>
                    </div>
                    <div className={`${style.Search_searchBar}`}>
                        <div className='container'>
                            <div className='row'>
                                <div className='align-self-center col-6'>
                                    <ul className={`list-unstyled mb-0 ${style.search_searchBar_links}`}>
                                        <li className={`${style.search_searchBar_links_linkk}`}>
                                            <a className={`${style.aaa}`} href='#'>
                                                Current
                                            </a>
                                        </li>
                                        <li className={`${style.search_searchBar_links_linkk}`}>
                                            <a className={`${style.aaa}`} href='#'>
                                                Upcoming
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TopImage>
        </div>
    )
}

export default Whats

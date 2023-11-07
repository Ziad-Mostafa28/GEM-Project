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

    const [flag, setFlag] = useState(false);
    const handleClick = () => {
        setFlag(!flag)
    }

    return (

        <>
            <section>
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
                                        {/* <ul className={`list-unstyled mb-0 ${style.search_searchBar_links}`}>
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
                                        </ul> */}
                                        <nav>
                                            <div className={`nav nav-tabs list-unstyled mb-0 ${style.search_searchBar_links}`} id="nav-tab" role="tablist">
                                                <button className={`nav-link active ${style.search_searchBar_links_linkk}`} id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
                                                <button className={`nav-link ${style.search_searchBar_links_linkk}`} id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TopImage>
            </section>


            <section className={`${style.seconed_section}`}>
                <div className='container'>
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                            ...
                            
                            </div>
                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">...</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Whats

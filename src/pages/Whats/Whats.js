import React, { useEffect, useState } from 'react'
import endPoints, { httpData } from '../../store/Alldata';
import TopImage from '../../components/wrapper/TopImage';
import style from './Whats.module.css'
import Loader from '../../components/wrapper/Loader';
import WhatsAll from '../../components/WhatsData/WhatsAll';

const Whats = () => {

    const [whatsdata, setwhatsdata] = useState([]);
    const [events, setEvents] = useState();
    const [currentdata, setcurrentdata] = useState([]);
    const [loader, setLoader] = useState(true);

    const [flagTab, setFlagTab] = useState("");

    const changeEvents = (tab, flagTab) => {
        setEvents(tab)
        setFlagTab(flagTab)
    }
    useEffect(() => {
        async function getwhatsData() {
            const response = await httpData.get(endPoints.whats);
            setwhatsdata(response.data.data);
        }
        getwhatsData();
    }, []);


    useEffect(() => {
        async function getcurrentData() {
            const response = await httpData.get(`${endPoints.Current}${events ? `&category_id=${events}` : ''}`);
            setcurrentdata(response.data.data);
            setLoader(false)
            console.log(response);
        }
        getcurrentData();
    }, [events]);


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
                                        <nav>
                                            <div className={`nav nav-tabs list-unstyled mb-0 ${style.search_searchBar_links}`} id="nav-tab" role="tablist">
                                                <button className={`nav-link active ${style.search_searchBar_links_linkk}`} id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Current</button>
                                                <button className={`nav-link ${style.search_searchBar_links_linkk}`} id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Upcoming</button>
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
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                            <nav>
                                <div className={`nav nav-tabs ${style.taps_style}`} id="nav-tab" role="tablist">
                                    <button className={`nav-link active ${style.taps_tap}`} id="nav-All-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-All"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-All" aria-selected="true">All</button>
                                    <button className={`nav-link ${style.taps_tap}`} id="nav-Events-tab" data-bs-toggle="tab" data-bs-target="#nav-Events" type="button" role="tab" aria-controls="nav-Events" aria-selected="false" onClick={() => changeEvents(1, "nav-Events-tab")}>Events</button>
                                    <button className={`nav-link ${style.taps_tap}`} id="nav-Conferences-tab" data-bs-toggle="tab" data-bs-target="#nav-Conferences" type="button" role="tab" aria-controls="nav-Conferences" aria-selected="false" onClick={() => changeEvents(2, "nav-Conferences-tab")}>Conferences</button>
                                    <button className={`nav-link ${style.taps_tap}`} id="nav-Cultural-Programs-tab" data-bs-toggle="tab" data-bs-target="#nav-Cultural-Programs" type="button" role="tab" aria-controls="nav-Cultural-Programs" aria-selected="false" Cultural-Programs onClick={() => changeEvents(3, "nav-Cultural-Programs-tab")}>Cultural-Programs</button>
                                    <button className={`nav-link ${style.taps_tap}`} id="nav-Exhibitions-tab" data-bs-toggle="tab" data-bs-target="#nav-Exhibitions" type="button" role="tab" aria-controls="nav-Exhibitions" aria-selected="false" Exhibitions onClick={() => changeEvents(4, "nav-Exhibitions-tab")}>Exhibitions</button>
                                </div>
                            </nav>
                            <div className="tab-content mt-5" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-All" role="tabpanel" aria-labelledby="nav-All-tab" tabindex="0">
                                    {loader ? <Loader /> : <WhatsAll data={currentdata?.events} />}
                                </div>
                                <div class="tab-pane fade" id="nav-Events" role="tabpanel" aria-labelledby={flagTab} tabindex="0" >
                                    {loader ? <Loader /> : <WhatsAll data={currentdata?.events} />}
                                </div>

                            </div>
                        </div>


                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">...</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Whats

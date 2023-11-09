import React, { useState } from 'react'
import style from './MuseumSearch.module.css'
import { useNavigate } from 'react-router-dom';

const MuseumSearch = () => {

    const [searchResault, setSearchResault] = useState("");
    const navigate = useNavigate();
    const [data, setData] = useState([])

    const fetchData = async (e) => {
        e.preventDefault();
        await fetch(`https://uat-iconcreations.com/2022/gem/public/api/web/museum/collections/filter?keyword=${searchResault}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data.data)
                navigate('/museumsearchResult', { state: data });
            });
    };

    return (

        <div className='input-wrapper' >
            <form className={`${style.Search_searchBar}`} onSubmit={fetchData}>
                <div className='container'>
                    <div className={`${style.search_search_group}`}>
                        <div className={`${style.search_search_group_div}`}>
                            <input className={`${style.search_search_group_controlForm}`}
                                placeholder='Search' id='collectionSearch'
                                type='search'
                                value={searchResault}
                                onChange={e => setSearchResault(e.target.value)}
                            />
                            <button className={`${style.search_search_group_link}`} aria-label='collectionSearch' id='searchSubmit'>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )

}

export default MuseumSearch






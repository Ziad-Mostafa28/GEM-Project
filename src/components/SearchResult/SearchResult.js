import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import style from './SearchResult.module.css'

const SearchResult = () => {
    const location = useLocation();
    const data = location.state.data; 
    const [flag, setFlag] = useState(false);
    const handleClick = () => {
        setFlag(!flag)
    } 
    return (
        <div className={`${style.SearchResult}`}>
            <div className='container'>
                <div className='row '>


                    {data && data.map((item) =>
                        <div className='mb-4 col-lg-4 col-md-6'>
                            <a className={`${style.StyleA}`} href={`search-result/${item.id}`}>
                                <div key={item.id} className={`${style.stylerow}`}>
                                    <div>
                                        <h3 className={`${style.Search_h3}`}>{item.title}</h3>

                                        <p className={`${style.Search_p}`}>
                                            {flag ? item.description : item.description.slice(0, 150)}
                                            <span onClick={handleClick}>
                                                ...
                                            </span>
                                        </p>

                                    </div>
                                    <span className={`${style.styleLink}`}>{item.type}</span>
                                </div>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SearchResult

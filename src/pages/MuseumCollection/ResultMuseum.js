import React from 'react'
import { useLocation } from 'react-router-dom';
import style from './ResultMuseum.module.css'

function ResultMuseum() {

    const location = useLocation();
    const data = location.state.data;

    console.log(data);

    return (
        <>
            <section className={`${style.welcome}`}>

            </section>

            <section>
                <div className={`${style.SearchResult}`}>
                    <div className='container'>
                        <div className='row '>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ResultMuseum

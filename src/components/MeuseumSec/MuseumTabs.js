import React from 'react'
import style from './MuseumTabs.module.css'
const MuseumTabs = ({ data }) => {
    return (
        <>
            <div className={`navbar-collapse d-block ${style.collapse}`} id="bs-example-navbar-collapse-1">
                <ul className={`${style.taps}`}>
                    <li><a href="#mu-Collections">Collections</a></li>
                    <li><a href="#mu-Children's-Museum">Children's Museum</a></li>
                    <li><a href="#mu-Conservation-Centre">Conservation Centre</a></li>
                </ul>
            </div>


            <section className={`${style.welcome}`} id="mu-Collections" >

                <div className='container'>
                    <h3 className={`${style.title_h}`}>
                        {data?.collections_title}
                    </h3>
                    <div className={`${style.mainBoxx_boxx}`}>

                        <p className={`${style.text_p}`}>
                            {data?.collections_description}
                        </p>
                    </div>
                </div>


            </section>

        </>


    )
}

export default MuseumTabs

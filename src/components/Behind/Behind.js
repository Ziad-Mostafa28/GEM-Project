import React, { useContext } from 'react'
import { homeContext } from '../../store/homeContext'
import styles from './Behind.module.css'

const Behind = () => {

    const AllBehind = useContext(homeContext);
    const behind_the_scenes = AllBehind.behind_the_scenes;

    return (
        <section className={`my-5 p-0 ${styles.scenes_section}`}>
            <div className='h-100 container'>
                <div key={behind_the_scenes?.id} className={`${styles.content}`}>
                    <h3 className={`fs-2 ${styles.Behind_h3}`}>{behind_the_scenes?.title}</h3>
                    <p className={`${styles.Behind_p}`}>{behind_the_scenes?.details}</p>
                    <a href='#' className={`${styles.ALink}`}> Read More </a>
                </div>
            </div>
        </section>
    )
}

export default Behind;

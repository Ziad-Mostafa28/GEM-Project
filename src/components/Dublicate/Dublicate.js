import React, { useContext } from 'react'
import { homeContext } from '../../store/homeContext'
import styles from './Dublicate.module.css'
const Dublicate = () => {
    const AllDublicate = useContext(homeContext);
    // console.log(AllDublicate);
    const homeSections = AllDublicate.home_sections;


    return (
        <div className={`${styles.Dublicate}`}>
            <div >
                {homeSections && homeSections.map((newData) =>
                    <div key={newData.id} className={styles.boxes} >
                        <div className={`row d-flex  mx-0 ${styles.kides_box}`}>
                            <div className={`col-lg-6  col-sm-12 p-0 ${styles.imgss}`} >
                                <img key={newData.id} src={newData.home_image} className={`d-block w-100 ${styles.img}`} alt="First slide" />
                            </div>
                            <div className={`col-lg-6  col-sm-12 ${styles.text}`}>
                                <h3>
                                    <span className={`${styles.span}`}>
                                        {newData.title}
                                    </span>
                                </h3>
                                <p className={`${styles.p}`}>
                                    {newData.description}
                                </p>
                                <a href='#' className={`${styles.link}`}>
                                    {newData.learn_more_txt}
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )

};

export default Dublicate

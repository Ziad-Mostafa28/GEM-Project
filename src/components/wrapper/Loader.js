import React from 'react'
import styles from './loader.module.css'

const Loader = () => {
    return (
        <div className="text-center mt-5">
            <span className={styles.loader}></span>
        </div>
    )
}

export default Loader

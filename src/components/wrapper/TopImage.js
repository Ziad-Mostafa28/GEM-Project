import React from 'react'
import style from './TopImage.module.css'

const TopImage = ({ children }) => {

    return (

        <div className={`img-full img-block ${style.banner_image}`}>
            {children}
        </div>
    )
}

export default TopImage;

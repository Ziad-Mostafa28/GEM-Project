import React from 'react'
import style from './TopImage.module.css'

const TopImage = () => {

    return (
        <div className={`img-full img-block ${style.banner_image}`}>
            <span className={`${style.banner_span}`}>
                <img src='https://gem-icon-creations.vercel.app/_next/image/?url=https%3A%2F%2Fuat-iconcreations.com%2F2022%2Fgem%2Fpublic%2Fuploads%2Fopening-hours%2F202301101620Visit-Banner.jpg&w=1920&q=100' />
            </span>
            <div className={`${style.Banner_content}`}>
                <div className='container'>
                    <h3 className={`${style.banner_content_title}`}>
                        <a href='/'>
                            
                        </a>
                    </h3>
                    <p className={`${style.banner_content_text}`}>
                        Everything you need to know before visiting the GEM
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TopImage

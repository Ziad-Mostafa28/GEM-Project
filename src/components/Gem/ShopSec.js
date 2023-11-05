import React from 'react'
import style from './ShopSec.module.css'

const ShopSec = ({ data }) => {

    return (
        <div className={`${style.image}`}>

            <div className={`h-100 container`}>
                <div className={`${style.shop_content}`}>
                    <h3 className={`${style.shop_content_title}`}>
                        {data?.shop_title}
                    </h3>
                    <p className={`${style.shop_content_text}`}>
                        {data?.shop_description}
                    </p>
                    <a className={`${style.Shop_link}`}>
                        <span>
                            Learn More
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ShopSec

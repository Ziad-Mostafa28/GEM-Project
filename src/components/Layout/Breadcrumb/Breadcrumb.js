import React from 'react'
import style from './Breadcrumb.module.css'


const Breadcrumb = ({ collection, artTitle }) => {
    return (

        <div>
            <a className={`${style.detailsBreadCrumb}`} aria-label="/museum" href='/'>
                Museum
            </a>
            <a className={`${style.detailsBreadCrumb}`} aria-label="/museum/collections" href='/'>
                Collections
            </a>
            <a className={`${style.detailsBreadCrumb}`} aria-label="/museum/collections/4" href='/'>
                {collection}
            </a>
            <span  className={`${style.styleFirstSpan}`} >
                {artTitle}
            </span>

        </div>
    )
}

export default Breadcrumb

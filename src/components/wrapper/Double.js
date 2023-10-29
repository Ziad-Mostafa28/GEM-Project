import React from 'react'
import style from './Double.module.css'

const Double = ({ children }) => {
    return (
        <>
            <div className={`${style.double}`}>
                {children}
            </div>
        </>
    )
}

export default Double

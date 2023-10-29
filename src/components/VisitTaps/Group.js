import React from 'react'
import style from './Group.module.css'

const Group = ({ data }) => {
    return (

        <>
            <div className='container'>
                <h3 className={`${style.title_h}`}>Group Visits</h3>
                <div>
                    {data && data?.group_visits?.map((item) =>
                        <div className={`${style.big_Card}`}>
                            <div className={`${style.card_Img}`}>
                                <span>
                                    <img className='w-100 object-fit-cover ' src={item?.image} />
                                </span>
                            </div>
                            <div className={`${style.card_Box}`}>
                                <h3 className={`${style.card_Box_h3}`}>
                                    <span>{item?.title}</span>
                                </h3>
                                <p
                                    dangerouslySetInnerHTML={{ __html: item?.description }} >
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Group

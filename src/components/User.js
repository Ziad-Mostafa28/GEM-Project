import React, { useContext } from 'react'
import { userContext } from './store/userContext'


const User = () => {
    const newvalue = useContext(userContext);
    const banners = newvalue?.banners //for all banners
    const collections = newvalue?.collections //for all collections
    
    return (
        <>
            {banners?.length > 0 ? banners.map((banner) =>
                <div>
                    <h1>{banner.title}</h1>
                </div>
            ) : ''}
        </>
    )
}

export default User;

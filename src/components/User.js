import React, { useContext } from 'react'
import { userContext } from './store/userContext'


const User = () => {
    const newvalue = useContext(userContext);
    return (
        <>
            {newvalue.length > 0 ? newvalue.map((val) =>
                <div>
                    <h1>{val.banners.title}</h1>
                </div>
            ) : ''}
        </>
    )
}

export default User;

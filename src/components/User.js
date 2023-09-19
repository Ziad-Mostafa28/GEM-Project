import React, { useContext } from 'react'
import { userContext } from './store/userContext'


const User = () => {
    const newvalue = useContext(userContext);
    return (
        <>
            {newvalue.length > 0 ? newvalue.map((val) =>
                <>
                    <h1>{val.name}</h1>
                </>
            ) : ''}
        </>
    )
}

export default User;

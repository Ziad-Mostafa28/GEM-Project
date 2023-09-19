import React, { Fragment, useContext } from 'react'
import { postContext } from './posts';

const Second = () => {
    const post = useContext(postContext);
    console.log(post, "data");
    return (
        <>
            {post.length > 0 ? post.map((val) =>
                <Fragment>
                    <h2>{val.id}</h2>
                </Fragment>

            ) : ""}
        </>
    )
}

export default Second;

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import style from './CollectionDetails.module.css'
import Breadcrumb from '../Layout/Breadcrumb/Breadcrumb';

const CollectionDetails = () => {

    const params = useParams();

    const [posts, setPosts] = useState([])

    // console.log(posts.collection?.title);
    useEffect(() => {
        axios.get(`https://uat-iconcreations.com/2022/gem/public/api/web/museum/collections/highlights/${params.id}/details`)
            .then(res => {
                setPosts(res.data.data)
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [params.id])
    console.log(params, 'posts')

    return (
        <div>

            <section className={`${style.Sectionss}`}>
                <div className='container'>
                    <div className='d-flex align-items-center'>
                        <button className={`me-4 ${style.FirstButton}`}>
                            <svg className={`${style.buttonsvg}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                            </svg>
                        </button>

                        <Breadcrumb collection={posts.collection?.title} artTitle={posts?.title} />
                    </div>
                    <h3 className={`title mb-4 mt-4 d-flex ${style.h3Title}`}>
                        <span>
                            {posts.title}
                        </span>
                    </h3>
                </div>
            </section>

        </div>
    )
}

export default CollectionDetails

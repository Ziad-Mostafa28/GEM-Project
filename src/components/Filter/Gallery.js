import React, { useEffect, useState } from 'react'
import endPoints, { httpData } from '../../store/Alldata';
import style from './Gallery.module.css'

function Gallery({ galleryValue }) {

    const [gallerydata, setGallerydata] = useState([]);

    useEffect(() => {
        async function getgallerydata() {
            const response = await httpData.get(endPoints.Gallery);
            setGallerydata(response.data.data);
        }
        getgallerydata();
    }, []);
    return (

        <select className={style.Div_select} onChange={(event) => galleryValue(event.target.value)}>
            <option selected >Select</option>
            {gallerydata && gallerydata.map((data) =>

                <option key={data?.id} value={data?.id}>
                    {data?.title}
                </option>
            )}
        </select>
    )
}

export default Gallery

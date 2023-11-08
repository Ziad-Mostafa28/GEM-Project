import React, { useEffect, useState } from 'react'
import endPoints, { httpData } from '../../store/Alldata';
import style from './MuseCollection.module.css'

const MuseCollection = () => {

    const [musecollection, setMusecollection] = useState([]);

    useEffect(() => {
        async function getmusecollection() {
            const response = await httpData.get(endPoints.museumCollection);
            setMusecollection(response.data.data);
        }
        getmusecollection();
    }, []);

    return (

        <section className={`${style.welcome}`}>
            
        </section>
    )
}

export default MuseCollection

import React, { useEffect, useState } from 'react'
import endPoints, { httpData } from '../../store/Alldata';
import style from './Provenance.module.css'

function Provenance() {

    const [provenanceldata, setProvenancedata] = useState([]);

    useEffect(() => {
        async function getmaterialdata() {
            const response = await httpData.get(endPoints.Provenance);
            setProvenancedata(response.data.data);
        }
        getmaterialdata();
    }, []);
    return (

        <select className={style.Div_select}>
            <option selected >Select</option>
            {provenanceldata && provenanceldata.map((data) =>

                <option key={data?.id} value={data?.id}>
                    {data?.title}
                </option>
            )}
        </select>
    )
}

export default Provenance

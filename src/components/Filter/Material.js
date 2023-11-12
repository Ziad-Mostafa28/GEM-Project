import React, { useEffect, useState } from 'react'
import endPoints, { httpData } from '../../store/Alldata';
import style from './Material.module.css'

function Material() {

    const [materialdata, setMaterialdata] = useState([]);

    useEffect(() => {
        async function getmaterialdata() {
            const response = await httpData.get(endPoints.Material);
            setMaterialdata(response.data.data);
        }
        getmaterialdata();
    }, []);
    return (

        <select className={style.Div_select}>
            <option selected >Select</option>
            {materialdata && materialdata.map((data) =>

                <option value={data?.id}>
                    {data?.title}
                </option>
            )}
        </select>
    )
}

export default Material

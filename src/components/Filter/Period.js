import React, { useEffect, useState } from 'react'
import endPoints, { httpData } from '../../store/Alldata';
import style from './Period.module.css'


const Period = ({ periodValue }) => {

    const [perioddata, setPerioddata] = useState([]);

    useEffect(() => {
        async function getperioddata() {
            const response = await httpData.get(endPoints.Period);
            setPerioddata(response.data.data);
        }
        getperioddata();
    }, []);
    return (

        <select className={style.Div_select} onChange={(event) => periodValue(event.target.value)} >
            <option selected >Select</option>
            {perioddata && perioddata.map((data) =>

                <option key={data?.id} value={data?.id}>
                    {data?.title}
                </option>
            )}
        </select>
    )
}

export default Period

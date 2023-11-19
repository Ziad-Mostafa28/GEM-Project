import React, { useEffect, useState } from 'react'
import endPoints, { httpData } from '../../store/Alldata';
import style from './Theme.module.css'

function Theme({ ThemeValue }) {

    const [themedata, setThemedata] = useState([]);

    useEffect(() => {
        async function getthemedata() {
            const response = await httpData.get(endPoints.Theme);
            setThemedata(response.data.data);
        }
        getthemedata();
    }, []);
    return (

        <select className={style.Div_select} onChange={(event) => ThemeValue(event.target.value)}>
            <option selected >Select</option>
            {themedata && themedata.map((data) =>

                <option key={data?.id} value={data?.id}>
                    {data?.title}
                </option>
            )}
        </select>
    )
}

export default Theme

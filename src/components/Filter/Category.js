import React, { useEffect, useState } from 'react'
import endPoints, { httpData } from '../../store/Alldata';
import style from './Category.module.css'
function Category() {

    const [categorydata, setCategorydata] = useState([]);

    useEffect(() => {
        async function getcategorydata() {
            const response = await httpData.get(endPoints.Category);
            setCategorydata(response.data.data);
        }
        getcategorydata();
    }, []);
    return (

        <select className={style.Div_select}>
            <option selected >Select</option>
            {categorydata && categorydata.map((data) =>

                <option value={data?.id}>
                    {data?.title}
                </option>
            )}
        </select>
    )
}

export default Category

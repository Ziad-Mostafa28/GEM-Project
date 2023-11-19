import React, { useEffect, useState } from 'react'
import endPoints, { httpData } from '../../store/Alldata';
import style from './Category.module.css'




const Category = ({ categoryValue }) => {

    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        async function getCategoryData() {
            const response = await httpData.get(endPoints.Category);
            setCategoryData(response.data.data);
        }
        getCategoryData();
    }, []);
    return (

        <select className={style.Div_select} onChange={(event) => categoryValue(event.target.value)}>
            <option selected >Select</option>
            {categoryData && categoryData.map((data) =>

                <option key={data?.id} value={data?.id}>
                    {data?.title}
                </option>
            )}
        </select>
    )
}

export default Category

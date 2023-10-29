import React, { useEffect, useState } from 'react'
import TopImage from '../../components/wrapper/TopImage'
import Visittaps from '../../components/VisitTaps/Visittap';
import Card from '../../components/wrapper/Card';
import endPoints, { httpData } from '../../store/Alldata';



const Visit = (props) => {

    const [visitdata, setvisitdata] = useState([]);

    useEffect(() => {
        async function getvisitData() {
            const response = await httpData.get(endPoints.visit);
            setvisitdata(response.data.data); 
        }
        getvisitData();
    }, []); 

    return (
        <>

            <TopImage>
                <span>
                    <img src={visitdata.banner_image} />
                </span>
                <div>
                    <div className='container'>
                        <h3>
                            <a href=''> {visitdata.banner_title} </a>
                        </h3>
                        <p>
                            {visitdata.banner_description}

                        </p>
                    </div>
                </div>
            </TopImage>
            <Visittaps data={visitdata} />
            <Card data={visitdata} />

        </>
    )
}

export default Visit

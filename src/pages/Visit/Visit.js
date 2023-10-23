import React, { useEffect, useState } from 'react'
import TopImage from '../../components/wrapper/TopImage'
import axios from 'axios';
import Visittaps from '../../components/VisitTaps/Visittap';
import Card from '../../components/wrapper/Card';



const Visit = (props) => {

    const [visitdata, setvisitdata] = useState([]);

    useEffect(() => {
        async function getvisitData() {
            const response = await axios.get(
                "https://uat-iconcreations.com/2022/gem/public/api/web/visit"
            );
            setvisitdata(response.data.data);
            // console.log(response.data.data);
        }
        getvisitData();
    }, []);
    console.log(visitdata, 'sdsdsd');

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

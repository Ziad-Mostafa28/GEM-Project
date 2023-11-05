import React, { useEffect, useState } from 'react'
import endPoints, { httpData } from '../../store/Alldata';
import TopImage from '../../components/wrapper/TopImage';
import Gemtaps from '../../components/Gem/Gemtaps';

const Gem = () => {


    const [gemdata, setgemdata] = useState([]);

    useEffect(() => {
        async function getgemdata() {
            const response = await httpData.get(endPoints.experience);
            setgemdata(response.data.data);
        }
        getgemdata();
    }, []);

    return (
        <div>

            <TopImage>
                <span>
                    <img src={gemdata.banner_image} />
                </span>
                <div>
                    <div className='container'>
                        <h3>
                            <a href=''> {gemdata.banner_title} </a>
                        </h3>
                        <p>
                            {gemdata.banner_description}

                        </p>
                    </div>
                </div>
            </TopImage>

            <Gemtaps data={gemdata} />
        </div>
    )
}

export default Gem

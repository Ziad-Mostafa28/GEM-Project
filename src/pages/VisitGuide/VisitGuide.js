import React, { useEffect, useState } from 'react'
import TopImage from '../../components/wrapper/TopImage'
import axios from 'axios';
import Guidetab from '../../components/VisitTaps/Guidetab';

const VisitGuide = () => {

    const [Guidedata, setGuidedata] = useState([]);

    useEffect(() => {
        async function getGuidedata() {
            const response = await axios.get(
                "https://uat-iconcreations.com/2022/gem/public/api/web/visit/visitor-guide"
            );
            setGuidedata(response.data.data); 
        }
        getGuidedata();
    }, []); 


    return (
        <div>
            <TopImage>
                <span>
                    <img src={Guidedata.banner_image} />
                </span>
                <div>
                    <div className='container'>
                        <h3>

                            <a href=''> {Guidedata.banner_title} </a>
                        </h3>
                        <p>
                            {Guidedata.banner_description}

                        </p>
                    </div>
                </div>
            </TopImage>

            <Guidetab data={Guidedata} />
        </div>
    )
}

export default VisitGuide

import React, { useEffect, useState } from 'react'
import TopImage from '../../components/wrapper/TopImage'
import axios from 'axios';

const VisitGuide = () => {

    const [Guidedata, setGuidedata] = useState([]);

    useEffect(() => {
        async function getGuidedata() {
            const response = await axios.get(
                "https://uat-iconcreations.com/2022/gem/public/api/web/visit/visitor-guide"
            );
            setGuidedata(response.data.data);
            // console.log(response.data.data);
        }
        getGuidedata();
    }, []);
    console.log(Guidedata, 'sdsdsd');


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
            
        </div>
    )
}

export default VisitGuide

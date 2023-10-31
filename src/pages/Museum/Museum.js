import React, { useEffect, useState } from 'react'
import endPoints, { httpData } from '../../store/Alldata';
import TopImage from '../../components/wrapper/TopImage';

const Museum = (props) => {

    const [museumdata, setMuseumdata] = useState([]);

    useEffect(() => {
        async function getmuseumdata() {
            const response = await httpData.get(endPoints.museum);
            setMuseumdata(response.data.data);
        }
        getmuseumdata();
    }, []);

    console.log(museumdata, 'sds')

    return (
        <div>
            <TopImage>
                <span>
                    <img src={museumdata.banner_image} />
                </span>
                <div>
                    <div className='container'>
                        <h3>
                            <a href=''> {museumdata.banner_title} </a>
                        </h3>
                        <p>
                            {museumdata.banner_description}

                        </p>
                    </div>
                </div>
            </TopImage>
        </div>
    )
}

export default Museum

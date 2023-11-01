import React, { useEffect, useState } from 'react'
import endPoints, { httpData } from '../../store/Alldata';
import TopImage from '../../components/wrapper/TopImage';
import MuseumTabs from '../../components/MeuseumSec/MuseumTabs';
import SwipMuseum from '../../components/MeuseumSec/SwipMuseum';
import ChildMuseum from '../../components/MeuseumSec/ChildMuseum';
import Conservation from '../../components/MeuseumSec/Conservation';


const Museum = (data) => {

    const [museumdata, setMuseumdata] = useState([]);

    useEffect(() => {
        async function getmuseumdata() {
            const response = await httpData.get(endPoints.museum);
            setMuseumdata(response.data.data);
        }
        getmuseumdata();
    }, []);

    console.log(museumdata, 'sdd')

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

            <MuseumTabs data={museumdata} />

            <section className='mb-4' id="mu-Children's-Museum">
                <SwipMuseum data={museumdata} />
            </section>

            <ChildMuseum data={museumdata} />
            <Conservation data={museumdata} />
        </div>
    )

}

export default Museum

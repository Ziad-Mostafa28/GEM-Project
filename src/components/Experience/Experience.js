import React, { useContext } from 'react'
import { homeContext } from '../../store/homeContext';

const Experience = () => {
    const AllExperience = useContext(homeContext);
    const experiences_left = AllExperience.experiences_left;

    const RightExperience = useContext(homeContext);
    const experiences_right = RightExperience.experiences_right;


    return (
        <div>
            <div className='container d-flex gap-4'>
                <div className='Left col-6'>
                    <div>
                        <div key={experiences_left?.id}>
                            {/* <img className='w-100' src={experiences_left.image}/> */}
                            <img className='w-100' src={experiences_left.image} alt="experience" />
                            <div>
                                <h3>{experiences_left?.title}</h3>
                                <p>{experiences_left?.details}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right col-6'>
                    <div>
                        {experiences_right && experiences_right.map((Rrights) =>
                            <div key={Rrights.id}>
                                <img className='w-100' src={Rrights.image} alt="experience" />
                                <div >
                                    <h3>{Rrights.title}</h3>
                                    <p>{Rrights.details}.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience

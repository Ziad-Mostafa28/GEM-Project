import React, { useContext } from 'react'
import { homeContext } from '../../store/homeContext';
import styles from './Experience.module.css'
const Experience = () => {
    const AllExperience = useContext(homeContext);
    const experiences_left = AllExperience.experiences_left;

    const RightExperience = useContext(homeContext);
    const experiences_right = RightExperience.experiences_right;


    return (
        <div className='my-5'>
            <div className='container mb-5'>
                <div className={`${styles.Caption}`}>
                    <h3>GEM Experience </h3>
                    <p className={`${styles.Caption_p}`}>Choose The Memories You'll Be Taking Home</p>
                </div>
                <div className={`d-flex ${styles.ExperianceGap}`}>
                    <div className='Left col-lg-6 col-sm-12'>
                        <div className='overflow-hidden'>
                            <div key={experiences_left?.id} className={`position-relative `}>
                                {/* <img className='w-100' src={experiences_left.image}/> */}
                                <img className={`w-100 ${styles.left_img} ${styles.div_image}`} src={experiences_left?.image} alt="experiencess" />
                                <div className={`position-absolute bottom-0 left-0 ${styles.Right_IMAge}`} >
                                    <h3 className={`fs-5 ${styles.TEXT_h3}`}>{experiences_left?.title}</h3>
                                    <p className={` ${styles.TEXT_P}`}>{experiences_left?.details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right col-lg-6 col-sm-12'>
                        <div className={`${styles.right_gap}`}>
                            {experiences_right && experiences_right.map((Rrights) =>
                                <div key={Rrights.id} className='position-relative overflow-hidden'>
                                    <img className={`w-100 ${styles.div_image}`} src={Rrights.image} alt="experience" />
                                    <div className={`position-absolute bottom-0 left-0 ${styles.Right_IMAge}`} >
                                        <h3 className={`fs-5 ${styles.TEXT_h3}`}>{Rrights.title}</h3>
                                        <p className={`${styles.TEXT_P}`}>{Rrights.details}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={`my-5 ${styles.LastButton}`}>
                    <a href='#'>
                        Discover More
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Experience

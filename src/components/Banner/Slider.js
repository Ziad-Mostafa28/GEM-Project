import React, { useContext } from 'react'
import { SliderContext } from './SliderContext';


const Slider = () => {
    const newvalue = useContext(SliderContext);
    const highlights = newvalue?.highlights
    return (
        <>
            {highlights?.length > 0 ? highlights.map((highlight) =>
                <div>
                    <h2>{highlight.title}</h2>
                </div>
            ) : ''}
        </>
    )
}

export default Slider;

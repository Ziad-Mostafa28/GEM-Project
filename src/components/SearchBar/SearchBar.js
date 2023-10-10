import React, { useState } from 'react'
import classes from './SearchBar.module.css'

const SearchBar = () => {
    const [input, setInput] = useState("");
    const fetchData = (value) => {
        fetch("https://uat-iconcreations.com/2022/gem/public/api/web/search?keyword=test")
            .then((response) => response.json())
            .then((json) => {
                //     const results = json.filter((data) => {
                //         return (
                //             value &&
                //             data &&
                //             data.description &&
                //             data.description.toLowerCase().includes(value)
                //             )
                // });
                console.log(json);
            });
    };

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    return (
        <div className='input-wrapper' >
            <input className={`${classes.inputSearch}`}
                type='search'
                placeholder='search'
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
            <button className={`${classes.stylebutton}`}>
                <svg id="Component_50_3" data-name="Component 50 – 3" xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28">
                    <g id="Rectangle_2413" data-name="Rectangle 2413" fill="#4d4033" stroke="#000" strokeWidth="0.5" opacity="0">
                        <rect width="26" height="28" rx="10" stroke="none" />
                        <rect x="0.25" y="0.25" width="25.5" height="27.5" rx="9.75" fill="none" />
                    </g>
                    <path id="Path_1907" data-name="Path 1907" d="M606.268,664.333m13.294,13.294a9.629,9.629,0,1,0-13.617,0,9.629,9.629,0,0,0,13.617,0ZM605.945,664.01a10.775,10.775,0,0,1,16.27,14.044l4.242,4.242a1.625,1.625,0,0,1-2.226,2.226l-4.242-4.242a10.775,10.775,0,0,1-14.044-16.27Zm1.329,13.858a8.859,8.859,0,1,1,14.111-10.38,9.227,9.227,0,1,0-11.963,11.964,8.9,8.9,0,0,1-2.148-1.584Z"
                        transform="translate(-601.713 -658.778)" fill="#4d4033" fillRule="evenodd" />
                </svg>
            </button>

        </div>
    )

}

export default SearchBar






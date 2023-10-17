import React from 'react'
import classes from './Header.module.css'
import SearchBar from '../../SearchBar/SearchBar'

const Header = () => {
    return (

        // <div className={`${classes.header}`}>
        //     <div className='container d-flex my-2'>
        //         <div className={`col-6 ${classes.logo}`}>
        //             <a href='/'>
        //                 <img src='/img/Group 13642.png' />
        //             </a>
        //         </div>

        //         <div className='col-6 icons d-flex justify-content-end'>

        //             <nav className="navbar navbar-expand-lg p-0 m-0">
        //                 <div className="container-fluid ">
        //                     <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                         <span className="navbar-toggler-icon"></span>
        //                     </button>
        //                     <div className={`collapse navbar-collapse flex-column row-gap-3 ${classes.styleNave}`} id="navbarSupportedContent">
        //                         <ul className={`navbar-nav mb-0  ${classes.FirstULL}`}>
        //                             <li className='nav-item dropdown'>

        //                                 <div className={`${classes.SearchGroup}`}>
        //                                     <SearchBar />
        //                                 </div>
        //                                 {/* <div className={`${classes.Searchh}`}>
        //                                     <form>
        //                                         <div className={`${classes.SearchGroup}`}>
        //                                             <input type='search' className='inputSearch' />
        //                                             <button>
        //                                                 <svg id="Component_50_3" data-name="Component 50 – 3" xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28">
        //                                                     <g id="Rectangle_2413" data-name="Rectangle 2413" fill="#4d4033" stroke="#000" strokeWidth="0.5" opacity="0">
        //                                                         <rect width="26" height="28" rx="10" stroke="none" />
        //                                                         <rect x="0.25" y="0.25" width="25.5" height="27.5" rx="9.75" fill="none" />
        //                                                     </g>
        //                                                     <path id="Path_1907" data-name="Path 1907" d="M606.268,664.333m13.294,13.294a9.629,9.629,0,1,0-13.617,0,9.629,9.629,0,0,0,13.617,0ZM605.945,664.01a10.775,10.775,0,0,1,16.27,14.044l4.242,4.242a1.625,1.625,0,0,1-2.226,2.226l-4.242-4.242a10.775,10.775,0,0,1-14.044-16.27Zm1.329,13.858a8.859,8.859,0,1,1,14.111-10.38,9.227,9.227,0,1,0-11.963,11.964,8.9,8.9,0,0,1-2.148-1.584Z"
        //                                                         transform="translate(-601.713 -658.778)" fill="#4d4033" fillRule="evenodd" />
        //                                                 </svg>
        //                                             </button>
        //                                         </div>
        //                                     </form>
        //                                 </div> */}
        //                             </li>
        //                             <li className={`nav-item dropdown ${classes.dropss}`}>
        //                                 <a href='#'>
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="27.624" height="27.624" viewBox="0 0 27.624 27.624">
        //                                         <path id="Path_1912" data-name="Path 1912" d="M2002.328,954.891a13.812,13.812,0,1,0-13.811-13.812A13.831,13.831,0,0,0,2002.328,954.891Zm3.771-1.92a12.371,12.371,0,0,0,2.31-4.122,22.307,22.307,0,0,1,2.793.987A12.487,12.487,0,0,1,2006.1,952.971Zm6.031-4.189a23.827,23.827,0,0,0-3.323-1.208,24.153,24.153,0,0,0,.823-5.826h5.152A12.416,12.416,0,0,1,2012.131,948.782Zm2.653-8.371h-5.152a24.153,24.153,0,0,0-.823-5.826,23.789,23.789,0,0,0,3.323-1.208A12.4,12.4,0,0,1,2014.784,940.411Zm-3.581-8.089a22.286,22.286,0,0,1-2.793.987,12.372,12.372,0,0,0-2.31-4.121A12.486,12.486,0,0,1,2011.2,932.322ZM2003,928.688c1.648.4,3.117,2.272,4.089,4.947a22.526,22.526,0,0,1-4.089.492Zm0,6.776a23.835,23.835,0,0,0,4.5-.549,22.8,22.8,0,0,1,.8,5.5H2003Zm0,6.283h5.3a22.8,22.8,0,0,1-.8,5.5,23.839,23.839,0,0,0-4.5-.549Zm0,6.284a22.547,22.547,0,0,1,4.089.492c-.972,2.675-2.441,4.543-4.089,4.947Zm-9.543,1.805a22.373,22.373,0,0,1,2.794-.987,12.371,12.371,0,0,0,2.31,4.122A12.5,12.5,0,0,1,1993.454,949.836Zm8.207,3.634c-1.648-.4-3.117-2.272-4.089-4.947a22.553,22.553,0,0,1,4.089-.492Zm0-6.776a23.854,23.854,0,0,0-4.5.549,22.817,22.817,0,0,1-.8-5.5h5.3Zm0-6.284h-5.3a22.813,22.813,0,0,1,.8-5.5,23.844,23.844,0,0,0,4.5.549Zm0-11.723v5.439a22.531,22.531,0,0,1-4.089-.492C1998.543,930.96,2000.013,929.091,2001.661,928.688Zm-3.1.5a12.364,12.364,0,0,0-2.31,4.121,22.351,22.351,0,0,1-2.794-.987A12.492,12.492,0,0,1,1998.558,929.188Zm-6.032,4.188a23.8,23.8,0,0,0,3.323,1.208,24.2,24.2,0,0,0-.824,5.826h-5.152A12.424,12.424,0,0,1,1992.526,933.376Zm2.5,8.371a24.2,24.2,0,0,0,.824,5.826,23.811,23.811,0,0,0-3.323,1.208,12.42,12.42,0,0,1-2.652-7.035Z"
        //                                             transform="translate(-1988.517 -927.267)" fill="#4d4033" />
        //                                     </svg>
        //                                     <ul className={`dropdown-menu ${classes.naviii}`} aria-labelledby="navbarDropdown">
        //                                         <li><a className='dropdown-item' href="#">English</a></li>
        //                                         <li><a className='dropdown-item' href="#">Arabic</a></li>
        //                                     </ul>
        //                                 </a>

        //                             </li>
        //                             <li className={`nav-item dropdown ${classes.dropss}`}>
        //                                 <a href='#'>
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="27.104" height="27.736" viewBox="0 0 27.104 27.736">
        //                                         <g id="Component_47_2" data-name="Component 47 – 2" transform="translate(0.5 0.5)">
        //                                             <g id="Group_13540" data-name="Group 13540" transform="translate(6.955)">
        //                                                 <path id="Path_1914" fill="#4d4033" data-name="Path 1914" d="M2663.568,224.382h-1.661a5.272,5.272,0,0,1-5.265-5.266v-4.822a5.272,5.272,0,0,1,5.265-5.266h1.661a5.273,5.273,0,0,1,5.267,5.266v4.822A5.273,5.273,0,0,1,2663.568,224.382Zm-1.661-14.544a4.461,4.461,0,0,0-4.456,4.456v4.822a4.461,4.461,0,0,0,4.456,4.456h1.661a4.462,4.462,0,0,0,4.456-4.456v-4.822a4.462,4.462,0,0,0-4.456-4.456Z"
        //                                                     transform="translate(-2656.642 -209.028)" stroke="#4d4033" strokeWidth="1" />
        //                                             </g>
        //                                             <g id="Group_13543" data-name="Group 13543" transform="translate(0 15.808)">
        //                                                 <g id="Group_13541" data-name="Group 13541" transform="translate(0 0.001)">
        //                                                     <path id="Path_1915" data-name="Path 1915" d="M2568.06,422.2a.405.405,0,0,1-.406-.405c0-7.782,7.15-10.472,7.223-10.5a.405.405,0,0,1,.277.761c-.274.1-6.689,2.532-6.689,9.737A.406.406,0,0,1,2568.06,422.2Z"
        //                                                         transform="translate(-2567.655 -411.277)" fill="#4d4033" stroke="#4d4033" strokeWidth="1" />
        //                                                 </g>
        //                                                 <g id="Group_13542" data-name="Group 13542" transform="translate(18.338 0)">
        //                                                     <path id="Path_1916" data-name="Path 1916" d="M2809.617,422.2a.405.405,0,0,1-.406-.405c0-7.221-6.622-9.712-6.689-9.737a.405.405,0,0,1,.277-.762c.072.026,7.223,2.716,7.223,10.5A.406.406,0,0,1,2809.617,422.2Z"
        //                                                         transform="translate(-2802.256 -411.268)" fill="#4d4033" stroke="#4d4033" strokeWidth="1" />
        //                                                 </g>
        //                                             </g>
        //                                         </g>
        //                                     </svg>
        //                                 </a>
        //                                 <ul className={`dropdown-menu ${classes.naviii}`} aria-labelledby="navbarDropdown">
        //                                     <li><a className='dropdown-item' href="#">Log in</a></li>
        //                                     <li><a className='dropdown-item' href="#">Create Account</a></li>
        //                                 </ul>
        //                             </li>
        //                         </ul>
        //                         <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${classes.ULL} `}>
        //                             <li className={`nav-item   ${classes.dropss} `}>
        //                                 <a className="nav-link active" aria-current="page" href="#">VISIT</a>
        //                                 <ul className={`dropdown-menu  ${classes.naviii}`} >
        //                                     <li><a className="dropdown-item" href="#">Opening hours</a></li>
        //                                     <li><a className="dropdown-item" href="#">Tickets & Member</a></li>
        //                                     <li><a className="dropdown-item" href="#">Visitor Guide</a></li>
        //                                 </ul>
        //                             </li>
        //                             <li className={`nav-item   ${classes.dropss} `}>
        //                                 <a className="nav-link" href="#">MUSEUM</a>
        //                                 <ul className={`dropdown-menu  ${classes.naviii}`} >
        //                                     <li><a className="dropdown-item" href="#">Collections</a></li>
        //                                     <li><a className="dropdown-item" href="#">Children's Museum</a></li>
        //                                     <li><a className="dropdown-item" href="#">Conservation Centre</a></li>
        //                                 </ul>
        //                             </li>
        //                             <li className={`nav-item   ${classes.dropss} `}>
        //                                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                                     GEM EXPERIENCE
        //                                 </a>
        //                                 <ul className={`dropdown-menu  ${classes.naviii}`} >
        //                                     <li><a className="dropdown-item" href="#">Dine</a></li>
        //                                     <li><a className="dropdown-item" href="#">Shop</a></li>
        //                                     <li><a className="dropdown-item" href="#">Play</a></li>
        //                                     <li><a className="dropdown-item" href="#">Learn</a></li>
        //                                     <li><a className="dropdown-item" href="#">Work</a></li>
        //                                 </ul>
        //                             </li>
        //                             <li className={`nav-item   ${classes.dropss} `}>
        //                                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                                     WHAT'S ON
        //                                 </a>
        //                             </li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </nav>

        //         </div >
        //     </div >
        // </div >
        <header>
            <nav className='navbar navbar navbar-expand-lg navbar-light'>
                <div className='container'>
                    <a className={`img-block ${classes.navbar_box_logo}`} href='/'>
                        <span className={`${classes.Spanss}`}>
                            <img className='w-100' src='/img/Group 13642.png ' />
                        </span>
                    </a>
                    <button aria-controls="basic-navbar-nav" type="button"
                        aria-label="Toggle navigation" class="navbar-toggler collapsed">
                        <span class="navbar-toggler-icon">
                        </span>
                    </button>
                    <div className={`navbar_box_nav navbar-collapse collapse ${classes.navsBar}`} >
                        <div className={`d-flex flex-column flex-wrap  navbar-nav ${classes.stylenavebar_nav} `}>
                            <ul className={`list-unstyled ${classes.First_ULLL} `}>
                                <li className={`${classes.All_Li}`}>
                                    <SearchBar />

                                    {/* <div className={`${classes.newForm}`}>
                                        <form className='undefined'>
                                            <div className={`${classes.input_Search}`}>
                                                <input className={`${classes.Search_input}`} type="search" id="searchQuery" />
                                                <button className={` ${classes.Search_button}`}>
                                                    <svg className={`w-6 ${classes.Svgss}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="none" stroke-width="1.5">
                                                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </form>
                                    </div> */}
                                </li>
                                <li className={`${classes.All_Li}`}>
                                    <svg className={`w-6 ${classes.Svgssss}`} xmlns="http://www.w3.org/2000/svg" fill="none" height="1em" stroke-width="1.5" viewBox="0 0 512 512">
                                        <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
                                    </svg>
                                    <div className={` end-0 ${classes.dropdown_nav}`}>
                                        <a className={` pt-0 ${classes.style_link}`} aria-label="english slide" href='/'>English</a>
                                        <a className={` pb-0 ${classes.style_link}`} aria-label="arabic side" href='/'>Arabic</a>
                                    </div>
                                </li>
                                <li className={`${classes.All_Li}`}>
                                    <svg className={`w-6 ${classes.Svgssss}`} xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1.5" height="1em" viewBox="0 0 448 512">
                                        <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                                    </svg>
                                    <div className={` end-0 ${classes.dropdown_nav}`}>
                                        <a className={` pt-0 ${classes.style_link}`} aria-label="login page" href='/'>Log in</a>
                                        <a className={` pb-0 ${classes.style_link}`} aria-label="create account page" href='/'>Create Account</a>
                                    </div>
                                </li>
                            </ul>
                            <ul className={`list-unstyled ${classes.bottom_ULL}`}>
                                <li className={`${classes.middle_li}`}>
                                    <a className={`${classes.bottom_li}`} href='/'>
                                        Visit
                                    </a>
                                    <ul className={`${classes.DropsDown}`}>
                                        <li className={`${classes.DropsDown_li}`}>
                                            <a className={`${classes.bottom_link_a}`} href='/'>
                                                Opening Hours
                                            </a>
                                        </li>
                                        <li className={`${classes.DropsDown_li}`}>
                                            <a className={`${classes.bottom_link_a}`} href='/'>
                                                Tickets
                                            </a>
                                        </li>
                                        <li className={`${classes.DropsDown_li}`}>
                                            <a className={`${classes.bottom_link_a}`} href='/'>
                                                Visitor Guide
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className={`${classes.middle_li}`}>
                                    <a className={`${classes.bottom_li}`} href='/'>
                                        museum
                                    </a>
                                    <ul className={`${classes.DropsDown}`}>
                                        <li className={`${classes.DropsDown_li}`}>
                                            <a className={`${classes.bottom_link_a}`} href='/'>
                                                Collections
                                            </a>
                                        </li>
                                        <li className={`${classes.DropsDown_li}`}>
                                            <a className={`${classes.bottom_link_a}`} href='/'>
                                                Children's Museum
                                            </a>
                                        </li>
                                        <li className={`${classes.DropsDown_li}`}>
                                            <a className={`${classes.bottom_link_a}`} href='/'>
                                                Conservation Centre
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className={`${classes.middle_li}`}>
                                    <a className={`${classes.bottom_li}`} href='/'>
                                        GEM Experience
                                    </a>
                                    <ul className={`${classes.DropsDown}`}>
                                        <li className={`${classes.DropsDown_li}`}>
                                            <a className={`${classes.bottom_link_a}`} href='/'>
                                                Dine
                                            </a>
                                        </li>
                                        <li className={`${classes.DropsDown_li}`}>
                                            <a className={`${classes.bottom_link_a}`} href='/'>
                                                Shops
                                            </a>
                                        </li>
                                        <li className={`${classes.DropsDown_li}`}>
                                            <a className={`${classes.bottom_link_a}`} href='/'>
                                                Play
                                            </a>
                                        </li>
                                        <li className={`${classes.DropsDown_li}`}>
                                            <a className={`${classes.bottom_link_a}`} href='/'>
                                                Learn
                                            </a>
                                        </li>
                                        <li className={`${classes.DropsDown_li}`}>
                                            <a className={`${classes.bottom_link_a}`} href='/'>
                                                Work
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className={`${classes.middle_li}`}>
                                    <a className={`${classes.bottom_li}`} href='/'>
                                        What's on
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header


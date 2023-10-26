import React from 'react'
import classes from './Header.module.css'
import SearchBar from '../../SearchBar/SearchBar'

const Header = () => {

    const handleClick = (lang) => {
        localStorage.setItem('lang', lang)
    }
    return (
        <header>
            <nav className='p-0 navbar navbar navbar-expand-lg navbar-light'>
                <div className='container'>
                    <a className={`img-block ${classes.navbar_box_logo}`} href='/'>
                        <span className={`${classes.Spanss}`}>
                            <img className='w-100' src='/img/Group 13642.png ' />
                        </span>
                    </a>
                    <button aria-controls="basic-navbar-nav" type="button"
                        aria-label="Toggle navigation" className="navbar-toggler collapsed">
                        <span className="navbar-toggler-icon">
                        </span>
                    </button>
                    <div className={`navbar_box_nav navbar-collapse collapse ${classes.navsBar}`} >
                        <div className={`d-flex flex-column flex-wrap  navbar-nav ${classes.stylenavebar_nav} `}>
                            <ul className={`list-unstyled ${classes.First_ULLL} `}>
                                <li className={`${classes.All_Li}`}>
                                    <SearchBar />

                                </li>
                                <li className={`${classes.All_Li}`}>
                                    <svg className={`w-6 ${classes.Svgssss}`} xmlns="http://www.w3.org/2000/svg" fill="none" height="1em" strokeWidth="1.5" viewBox="0 0 512 512">
                                        <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
                                    </svg>
                                    <div className={` end-0 ${classes.dropdown_nav}`}>
                                        <button className={` pt-0 ${classes.style_link}`} onClick={() => handleClick('en')}>English</button>
                                        <button className={` pb-0 ${classes.style_link}`} onClick={() => handleClick('ar')}>Arabic</button>
                                    </div>
                                </li>
                                <li className={`${classes.All_Li}`}>
                                    <svg className={`w-6 ${classes.Svgssss}`} xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="1.5" height="1em" viewBox="0 0 448 512">
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
                                    <a className={`${classes.bottom_li}`} href='visit'>
                                        Visit
                                    </a>
                                    <ul className={`${classes.DropsDown}`}>
                                        <li className={`${classes.DropsDown_li}`}>
                                            <a className={`${classes.bottom_link_a}`} href='#mu-open-hour'>
                                                Opening Hours
                                            </a>
                                        </li>
                                        <li className={`${classes.DropsDown_li}`}>
                                            <a className={`${classes.bottom_link_a}`} href='#mu-buy-tickets'>
                                                Tickets
                                            </a>
                                        </li>
                                        <li className={`${classes.DropsDown_li}`}>
                                            <a className={`${classes.bottom_link_a}`} href='visit-Guide'>
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


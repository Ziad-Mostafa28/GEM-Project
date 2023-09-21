// import React, { useContext } from 'react'
// import { userContext } from './store/userContext'
// import Carousel from 'react-bootstrap/Carousel';


// const User = () => {
//     const newvalue = useContext(userContext);
//     const banners = newvalue?.banners
//     return (
//         <>
//             {banners?.length > 0 ? banners.map((banner) =>
//                 <div>
//                     {/* <h2>{banner.title}</h2>
//                     <img src={banner.image} /> */}

//                     <Carousel data-bs-theme="dark">
//                         <Carousel.Item key={banner.id}>
//                             <img
//                                 key={banner.id}
//                                 src={banner.image}
//                                 className="d-block w-100"
//                                 alt="First slide"
//                             />
//                             <Carousel.Caption>
//                                 <h5>{banner.title}</h5>
//                                 <p>{banner.description}</p>
//                             </Carousel.Caption>
//                         </Carousel.Item>


//                         <Carousel.Item>
//                             <img
//                                 className="d-block w-100"
//                                 src={banner.image}
//                                 alt="Second slide"
//                             />
//                             <Carousel.Caption>
//                                 <h5>{banner.title}</h5>
//                                 <p>{banner.description}</p>
//                             </Carousel.Caption>
//                         </Carousel.Item>
//                     </Carousel>
//                 </div>
//             ) : ''}
//         </>
//     )
// }

// export default User;

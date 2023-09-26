import React from 'react'
import Banner from '../../components/Banner/Banner'
import Highlight from '../../components/Highlight/Highlight'
import Collections from '../../components/Collections/Collections'
import Behind from '../../components/Behind/Behind'
import Experience from '../../components/Experience/Experience'


const Home = () => {
  return (
    <div>
      <Banner />
      <Highlight/>
      <Collections/>
      <Behind/>
      <Experience/>
    </div>
  )
}

export default Home
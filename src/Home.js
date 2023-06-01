import React from 'react'
import Feature from './component/Feature'
import HeroSection from './component/HeroSection'
import Services from './component/Services'
import Trusted from './component/Trusted'

const Home = () => {
  const data={
    name:"E-Store",
  }
  return (
  
   <> <HeroSection props={data}/>
   <Feature/>
   <Services/>
   <Trusted/>
    </>
  
  )
}

export default Home
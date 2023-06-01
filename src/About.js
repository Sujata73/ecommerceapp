import React from 'react'
import HeroSection from './component/HeroSection'

const About = () => {
  const data={
    name:"Ecommerce-Store",
  }
  return (
    <div><HeroSection props={data}/></div>
  )
}

export default About
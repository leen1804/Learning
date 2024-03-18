import React from 'react'
import Banner from '../components/Home/Banner'
import Crses from '../components/Home/Crses'
import About from '../components/Home/About'
import Partners from '../components/Home/Partners'
import ParentComponent from '../components/Home/ParentComponent'



function Home() {
  return (
   <>
 <Banner/> 
 <About/>
   <Crses/>
  
   <ParentComponent/>
   </>
  )
}

export default Home
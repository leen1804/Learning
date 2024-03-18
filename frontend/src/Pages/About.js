import React from 'react'
import Banner from '../components/About/Banner'
import BestC from '../components/About/BestC'
import Board from '../components/About/Board'
import Know from '../components/About/Know'
import Testimonal from '../components/About/Testimonal'

function About() {
  return (
    <div>
      <Banner/>
      <BestC/>
      <Board/>
      {/* <Know/> */}
      <Testimonal/>
    </div>
  )
}

export default About
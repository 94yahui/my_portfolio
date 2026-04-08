// import { useState } from 'react'
import Navigator from './Navigator'
import Intro from './Intro'
import Techinical from './Technical'
import Projects from './Projects'
import DevProcess from './DevProcess'
import Contact from './Contact'
import About from './About'
import Experience from './Experience'
// import RealLiquidNav from './components/LiquidGlassNav'
import './index.css'

function App() {

  return (
    <div className='mb-6'>
      <Navigator/>
      {/* <RealLiquidNav/> */}
      <div className='mt-25 p-2 flex flex-col gap-3'>
      <Intro/>
      <Projects/>
      <Techinical/>
      <Experience/>
      <DevProcess/>
      <About/>
      <Contact/>
      </div>
    </div>
  )
}

export default App

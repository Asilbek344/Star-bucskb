import React from 'react'
import "./App.css"
import Header from './Coponets/Header/Header'
import Hero from "./Coponets/Hero/Hero"
import About from './Coponets/About/About'
import Praducs from './Coponets/Praducs/Praducs'
import Newes from './Coponets/Newes/Newes'
import Blog from './Coponets/Blog/Blog'
import Foter from './Coponets/Footer/Foter'
const App = () => {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <About/>
        <Praducs/>
        <Newes/>
        <Blog/>
        <Foter/>
      </div>
    </>
  )
}

export default App

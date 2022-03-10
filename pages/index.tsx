import type { NextPage } from 'next'
import { works } from '../constants'
import { visitorState as visitor } from '../state'
// import Head from 'next/head'
// import Image from 'next/image'
import Hero from '../components/template/hero'
import About from '../components/template/about'
import Skills from '../components/template/skills'
import Experience from '../components/template/experience'
import Portofolio from '../components/template/portofolio'
import Contact from '../components/template/contact'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Portofolio {...{works}} />
      <Contact />
    </>
  )
}

export default Home

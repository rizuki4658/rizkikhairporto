import React from 'react'

import { About } from './about'
import { Skills } from './skills'
import { Experiences } from './experiences'
import { Contact } from './contact'

const PDFDownloads = () => {
  return (
    <>
      <div className="bg-white pdf mx-auto py-8">
        <About />
        <Skills />
        <Experiences />
        <Contact />
      </div>
    </>
  )
}

export default PDFDownloads
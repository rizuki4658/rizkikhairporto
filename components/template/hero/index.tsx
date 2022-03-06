import React from 'react'
import { socmed } from '../../../constants'

import Button from '../../common/button'

const Hero: React.FC = ({ ...props }) => {
  return (
    <div className="relative max-w-screen-2xl mx-auto h-screen max-h-screen">
      <div className="absolute z-20 top-0 left-0 right-0 bottom-0 md:w-1/2 w-full flex items-center md:items-end justify-center md:justify-start">
        <div className="px-8 py-8">
          <div className="space-y-6 md:text-left text-center">
            <h1 className="md:text-3xl lg:text-4xl text-2xl font-poppins font-semibold text-gray-300">
              Hey, I'm <span className="font-bold font-montserrat text-white">Rizki</span>
            </h1>
            <h2 className="md:text-4xl lg:text-5xl text-3xl font-poppins font-extrabold text-white">
              FrontEnd Developer
            </h2>
          </div>
          <p className="md:text-left text-center mt-4 mb-10 text-gray-300">
            Stick around to know more about me.
          </p>
          <p className="md:mb-36 mb-10 md:text-left text-center">
            <Button
              link="#about"
              customClass="px-12 py-4 rounded-full font-bold h-auto bg-primary-gradient hover:opacity-60">
              Get Started
            </Button>
          </p>
          <div className="flex justify-center md:justify-start items-center gap-x-1">
            {
              socmed.map((item) => (
                <Button
                  icon={item.name}
                  title={item.title}
                  link={item.link}
                  customClass="w-7 h-7" />
              ))
            }
          </div>
        </div>
      </div>
      <div className="absolute z-10 top-0 right-0 bottom-0 md:w-1/2 w-full">
        B
      </div>
    </div>
  )
}

export default Hero
import React from 'react'
import Link from 'next/link'
import { socmed } from '../../../constants'

import Button from '../../common/button'

const Hero: React.FC = ({ ...props }) => {
  return (
    <section id="hero" className="relative max-w-screen-2xl mx-auto md:pt-24">
      <div
        className="fixed md:hidden left-4 top-4 bg-primary-gradient rounded-lg h-10 w-10 flex items-center justify-center lg:shadow-lg shadow-gray-800 hover:shadow-none hover:opacity-80 transition-all ease-out duration-300">
        <Link href="/">
          <a
            className="font-audiowide bg-transparent text-3xl"
            title="Rizki Khair">
            R
          </a>
        </Link>
      </div>
      <div className="px-8 min-h-screen lg:min-h-0 hero-bg flex items-center justify-center md:block md:py-24">
        <div className="h-96 pt-10 md:pt-0">
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
          <p className="mb-10 lg:mb-20 md:text-left text-center">
            <Button
              link="#about"
              customClass="px-12 py-4 rounded-full font-bold h-auto bg-primary-gradient hover:opacity-60">
              Get Started
            </Button>
          </p>
          <div className="flex justify-center md:justify-start items-center gap-x-1">
            {
              socmed.map((item, key) => (
                <Button
                  key={key}
                  icon={item.name}
                  title={item.title}
                  link={item.link}
                  customClass="w-7 h-7" />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
import React from 'react'
import Title from '../title'
import SubTitle from '../subtitle'
import Button from '../../common/button'
import { about } from '../../../constants'

const About: React.FC = () => {
  const __html: string = about.description ? about.description : ''

  return (
    <section
      className="max-w-screen-2xl mx-auto px-8 py-24 min-h-screen md:min-h-0">
      <Title>
        About
      </Title>
      <SubTitle>{ about.title }</SubTitle>

      <div
        className="mt-16 text-base text-gray-300 font-montserrat flex flex-wrap-reverse md:flex-nowrap gap-10">
        <div className="w-full md:flex-1">
          <div
            className="leading-10"
            dangerouslySetInnerHTML={{ __html }} />
          <div className="mt-10 text-center md:text-left">
            <Button
              link="#skills"
              customClass="px-12 py-4 rounded-full font-bold h-auto bg-primary-gradient hover:opacity-60">
              What can I do?
            </Button>
          </div>
        </div>
        <div className="w-full md:flex-1 relative h-96">
          <div className="w-full absolute top-0 left-0 right-0 bottom-0 flex justify-center md:justify-items-end">
            <img src="/img/about.png" width="10" height="10" className="w-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
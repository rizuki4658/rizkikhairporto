import React from 'react'
import Title from '../title'
import SubTitle from '../subtitle'
import Button from '../../common/button'
import { about } from '../../../constants'

const About: React.FC = () => {
  const __html: string = about.description ? about.description : ''

  return (
    <div
      className="max-w-screen-2xl mx-auto px-8 py-24 min-h-screen">
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
        <div className="w-full md:flex-1">
          A
        </div>
      </div>
    </div>
  )
}

export default About
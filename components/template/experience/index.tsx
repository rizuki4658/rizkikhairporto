import React from 'react'
import Link from 'next/link'
import { myDates } from '../../../utils'
import { Experiences, Experience } from '../../../types'
import { experiences } from '../../../constants'

import Title from '../title'
import SubTitle from '../subtitle'
import Popover from '../../common/popover'
import Button from '../../common/button'

const Experience: React.FC<Experiences> = ({ ...props }) => {
  const myExperiences = props.experiences ? props.experiences : experiences

  return (
    <div className="max-w-screen-2xl mx-auto px-8 py-24">
      <Title>
        Experience
      </Title>
      <SubTitle>My career journey, so far</SubTitle>

      <div className="md:w-11/12 mx-auto px-4 mt-24">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 justify-center">
          {
            myExperiences.map((item: Experience, key: number) => {
              const help = () => {
                if (key === 0) {
                  return (
                    <Popover messages={item.name} position="bottom" theme="dark" width={300}>
                      <div className="w-4 h-4 bg-gray-300 rounded-full font-motserrat font-bold text-xs">!</div>
                    </Popover>
                  )
                }
                return ''
              }
              return (
                <div
                  key={key}
                  className="filter-image shadow-lg border-t border-black border-opacity-5 px-6 py-6 rounded-xl flex flex-warap items-center">
                  <div className="w-full">
                    <div className="flex items-center justify-between gap-3">
                      <img
                        src={`/company/${item.image}`}
                        alt="Picture of the author"
                        width={ item.image.includes('.svg') ? 140 : 60}
                        height={ item.image.includes('.svg') ? 100 : 40 }
                        className="h-auto"
                      />
                      { help() }
                    </div>
                    <div className="mt-10 mb-10">
                      <h3 className="md:text-lg font-montserrat text-gray-100 font-semibold">
                        {item.name}
                      </h3>
                      <p className="font-montserrat text-gray-100 my-4 md:text-base text-sm">
                       { item.date.start ? `${myDates(item.date.start).month.long} ${myDates(item.date.start).year.long} ` : 'Present'}
                       -
                       { item.date.end ? ` ${myDates(item.date.end).month.long} ${myDates(item.date.end).year.long}` : 'Present' }
                      </p>
                    </div>
                    <div>
                      <Link href={item.link}>
                        <a className="bg-primary-gradient-hover text-gray-300 p-2 px-6 text-sm font-montserrat rounded-full border border-black border-opacity-10 block md:inline-block text-center">
                          See Company
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="mt-20 text-center">
        <Button
          link="#portofolio"
          customClass="px-12 py-4 rounded-full font-bold h-auto bg-primary-gradient hover:opacity-60">
          See My Work
        </Button>
      </div>
    </div>
  )
}

export default Experience
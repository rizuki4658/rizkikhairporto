import React from 'react'
import { useRouter } from 'next/router'
import { Skills as SkillsType, Skill } from '../../../types'
import { skills } from '../../../constants'

import Title from '../title'
import SubTitle from '../subtitle'
import Button from '../../common/button'
import Progress from '../../common/progress'

const Skills: React.FC<SkillsType> = ({ ...props }) => {
  const { asPath } = useRouter()
  const isActive = asPath.includes('skills') ? true : false
  const mySkills = props.skills ? props.skills : skills

  return (
    <section
      id="skills"
      className={`${isActive ? 'skills-animation' : ''} max-w-screen-2xl mx-auto px-8 py-24 min-h-screen md:min-h-0`}>
      <div className="title">
        <Title>
          Skills
        </Title>
        <SubTitle>Self-taught and experience skills.</SubTitle>
      </div>

      <div
        className="mt-16 text-base text-gray-300 font-montserrat flex flex-wrap-reverse md:flex-nowrap gap-10">
        <div className="w-full md:flex-1">
          <div className="leading-8">
            My experience gives me new skills and takes the skills I already have to the next level.
          </div>
          <div className="mt-6">
            {
              mySkills.map((item: Skill, key: number) => (
                <Progress
                  key={key}
                  value={ isActive ? item.value : 0}
                  name={item.name}
                  icon={item.icon}
                  customClass="progress" />
              ))
            }
          </div>
          <div className="mt-10 text-center md:text-left">
            <Button
              link="#experience"
              customClass="px-12 py-4 rounded-full font-bold h-auto bg-primary-gradient hover:opacity-60">
              See My experiences
            </Button>
          </div>
        </div>
        <div className="w-full md:flex-1 md:flex items-center justify-center">
          <img
            src="/img/atom-gray.png"
            width="10"
            height="10"
            className="w-1/2 md:block hidden mx-auto image" />
        </div>
      </div>
    </section>
  )
}

export default Skills
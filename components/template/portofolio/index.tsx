import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Works, Work, PortofolioState as State } from '../../../types'

import Title from '../title'
import SubTitle from '../subtitle'
import Button from '../../common/button'


const updatingState = (
    up: boolean,
    state: State
  ) => {
    if (state.limit === state.start && up) {
      state.start = 1
      state.selected = 0
    } else if (state.start <= 1 && !up) {
      state.start = state.limit
      state.selected = state.limit - 1
    } else {
      state.start = up ? state.start + 1 : state.start - 1
      state.selected = up ? state.selected + 1 : state.selected - 1
    }

    return state
  }

const selecting = (up: boolean, state: any) => {
    const newState = updatingState(up, state.porto)
    return state.setter((prev: any) => ({...newState}))
  }

const Portofolio: React.FC<Works> = ({...props}: Works) => {
  const { asPath } = useRouter()
  const isActive = asPath.includes('portofolio') ? true : false

  const [porto, setPorto] = useState({
    start: 1,
    selected: 0,
    limit: props.works.length,
    isActive: false
  })
  const data: Work[] = props.works
  const __html: string = porto.start ? data[porto.start - 1].description : ''

  return (
    <section
      id="portofolio"
      className={`${isActive ? 'portofolio-animation' : ''} max-w-screen-2xl mx-auto px-8 py-24 min-h-screen md:min-h-0`}>
      <div className="title">
        <Title>
          Portofolio
        </Title>
        <SubTitle>
          Preview of what I&apos;ve been working
        </SubTitle>
      </div>
      <div
        className="carousel mt-20 text-base text-gray-300 font-montserrat flex flex-wrap-reverse md:flex-nowrap gap-20">
        <div className="w-full md:flex-1">
          <div className="flex font-poppins items-center gap-4 mb-10">
            <Button
              icon="arrow-left"
              customClass="w-7 h-7"
              onClick={selecting.bind(this, false, {porto, setter: setPorto})}
            />
            <div className="font-bold text-lg space-x-1">
              <span>{porto.start <= 9 ? `0${porto.start}` : porto.start }</span>
              <span>/</span>
              <span>{porto.limit <= 9 ? `0${porto.limit}` : porto.limit }</span>
            </div>
            <Button
              icon="arrow-right"
              customClass="w-7 h-7"
              onClick={selecting.bind(this, true, {porto, setter: setPorto})}
            />
          </div>
          {
            data.map((item: Work, key: number) => {
              if (key === porto.selected) {
                return (
                  <div key={key} className="carousel__content">
                    <h3 className="md:text-4xl lg:text-5xl text-3xl font-poppins font-semibold text-gray-200">
                      {item.name}
                    </h3>
                    <p dangerouslySetInnerHTML={{ __html }} className="content leading-8 py-4 md:h-64" />
                  </div>
                )
              }
            })
          }
        </div>
        {
          data.map((item: Work, key: number) => {
            if (key === porto.selected) {
              return (
                <div key={key} className="w-full md:flex-1 relative carousel__image">
                  <div style={{ backgroundImage: `url(/porto/porto-shape-one.webp)`}} className="w-full absolute top-0 bottom-0 right-0 left-0 bg-center bg-no-repeat md:bg-cover bg-contain z-0 opacity-5" />
                  <div className="md:absolute relative z-10 top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                    <img
                      alt={`portofolio-${item.name.toLowerCase()}`}
                      src={`/porto/${item.image}`}
                      width="10"
                      height="10"
                      className="w-auto md:h-96 h-60"
                    />
                  </div>
                </div>
              )
            }
          })
        }
      </div>
      
      <div className="mt-8 text-center md:text-left">
        <Button
          link="#contact"
          customClass="px-12 py-4 rounded-full font-bold h-auto bg-primary-gradient hover:opacity-60">
          Get in touch
        </Button>
      </div>
    </section>
  )
}

export default Portofolio

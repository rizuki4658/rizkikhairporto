import React from 'react'
import { Works, Work } from '../../../types'

import Title from '../title'
import SubTitle from '../subtitle'
import Button from '../../common/button'

interface State {
  start: number;
  selected: number;
  limit: number
}

class Portofolio extends React.Component<Works, State> {
  state: State = {
    start: 1,
    selected: 0,
    limit: this.props.works.length
  }

  updatingState = (
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

  selecting = (up: boolean) => {
    const newState = this.updatingState(up, this.state)
    this.setState((state, _) => ({
      start: newState.start,
      selected: newState.selected
    }))
  }

  render() {
    const data: Work = this.props.works[this.state.selected]
    const __html: string = data.description ? data.description : ''

    return (
      <section className="max-w-screen-2xl mx-auto px-8 py-24 min-h-screen md:min-h-0">
        <Title>
          Portofolio
        </Title>
        <SubTitle>
          Preview of what I've been working
        </SubTitle>
        <div
          className="mt-20 text-base text-gray-300 font-montserrat flex flex-wrap-reverse md:flex-nowrap gap-20">
          <div className="w-full md:flex-1">
            <div className="flex font-poppins items-center gap-4 mb-10">
              <Button
                icon="arrow-left"
                customClass="w-7 h-7"
                onClick={this.selecting.bind(this, false)}
              />
              <div className="font-bold text-lg space-x-1">
                <span>{this.state.start <= 9 ? `0${this.state.start}` : this.state.start }</span>
                <span>/</span>
                <span>{this.state.limit <= 9 ? `0${this.state.limit}` : this.state.limit }</span>
              </div>
              <Button
                icon="arrow-right"
                customClass="w-7 h-7"
                onClick={this.selecting.bind(this, true)}
              />
            </div>
            <div>
              <h3 className="md:text-4xl lg:text-5xl text-3xl font-poppins font-semibold text-gray-200">
                {data.name}
              </h3>
              <p dangerouslySetInnerHTML={{ __html }} className="leading-8 py-4" />
            </div>
            <div className="mt-10 text-center md:text-left">
              <Button
                link="#contact"
                customClass="px-12 py-4 rounded-full font-bold h-auto bg-primary-gradient hover:opacity-60">
                Get in touch
              </Button>
            </div>
          </div>
          <div className="w-full md:flex-1 relative">
            <div style={{ backgroundImage: `url(/porto/porto-shape-one.webp)`}} className="w-full absolute top-0 bottom-0 right-0 left-0 bg-center bg-no-repeat md:bg-cover bg-contain z-0 opacity-5" />
            <div className="md:absolute relative z-10 top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              <img
                alt={`portofolio-${data.name.toLowerCase()}`}
                src={`/porto/${data.image}`}
                width="10"
                height="10"
                className="w-11/12 h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Portofolio

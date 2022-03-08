import React from 'react'
import Link from 'next/link'
import { user } from '../../../state'
import { Visitor, User } from '../../../types'
import  { useValidator } from '../../../utils'
import { VisitorRules } from '../../../rules'

import Title from '../title'
import SubTitle from '../subtitle'
import MyInput from '../../common/input'
import Button from '../../common/button'

interface State {
  visitor: Visitor;
  validation: any,
  me: User
}

class Contact extends React.Component<Visitor, State> {
  state: State = {
    visitor: {...this.props},
    validation: useValidator(VisitorRules, this.props),
    me: user
  }
  render() {
    const data = this.state
    return (
      <div
        className="max-w-screen-2xl mx-auto px-8 py-24">
        <Title>
          Contact
        </Title>
        <SubTitle>
          <div className="font-poppins md:w-1/2 w-4/5">
            Interested in working with me or maybe just talk?
          </div> 
        </SubTitle>

        <p className="md:w-1/4 w-2/3 mt-12 font-poppins text-gray-300">
          Reach me on social media, by filling out the contact form or by sending an email to
          <Link href={`mailto:${data.me.email}`}>
            <a className="text-primary-gradient-hover">
              &nbsp;rizkikhair4658@.gmail.com
            </a>
          </Link>
        </p>

        <div className="md:w-1/3 w-1/2 mt-16">
          <form
            className="xl:text-lg md:text-base text-sm text-white md:space-y-10 space-y-6"
            onSubmit={() => { return }}>
            <div>
              <div className="mb-2 font-poppins">
                <label htmlFor="name">What's your name</label>
              </div>
              <MyInput type="text" />
            </div>
            <div>
              <div className="mb-2 font-poppins">
                <label htmlFor="email">Your email address</label>
              </div>
              <MyInput type="text" />
            </div>
            <div>
              <div className="mb-2 font-poppins">
                <label htmlFor="email">Type your message here</label>
              </div>
              <MyInput type="textarea" />
            </div>

            <div className="pt-2">
              <Button type="submit">
                Send message
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact
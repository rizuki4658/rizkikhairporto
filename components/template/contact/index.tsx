import React, { FormEvent, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { user } from '../../../state'

import Title from '../title'
import SubTitle from '../subtitle'
import Input from '../../common/input'
import Button from '../../common/button'
import Form from '../../common/form'
import TextArea from '../../common/textarea'

const onSubmit = (data: any) => console.log(data)

const Contact = () => {
  const { asPath } = useRouter()
  const isActive = asPath.includes('contact') ? true : false

  return (
    <section
      id="contact"
      className={`${isActive ? 'contact-animation' : ''} max-w-screen-2xl mx-auto px-8 py-24 min-h-screen md:min-h-0`}>  
      <div className="title">
        <Title>
          Contact
        </Title>
        <SubTitle>
          <div className="font-poppins md:w-1/2 w-4/5">
            Interested in working with me or maybe just talk?
          </div> 
        </SubTitle>
      </div>
      <p className="md:w-1/4 w-2/3 mt-12 font-poppins text-gray-300 content">
        Reach me on social media, by filling out the contact form or by sending an email to
        <Link href={`mailto:${user.email}`}>
          <a className="text-primary-gradient-hover">
            &nbsp;rizkikhair4658@.gmail.com
          </a>
        </Link>
      </p>
      <div className="md:w-1/3 w-2/3 mt-16 form">
        <Form onSubmit={onSubmit}>
          <Input {
              ...{
                name: 'name',
                label: 'What\'s your name',
                minLength: 2,
                required: true,
                message: 'Your name is required.'
              }
            } 
          />
          <Input {
              ...{
                name: 'email',
                label: 'Your email address',
                minLength: 10,
                required: true,
                message: 'Your email is required.'
              }
            }
          />
          <TextArea {
              ...{
                name: 'message',
                label: 'Type your message here',
                minLength: 20,
                required: true,
                message: 'Your message is required.'
              }
            } />
          <Button type="submit">
            Send message
          </Button>
        </Form>
      </div>
    </section>
  )
}

export default Contact
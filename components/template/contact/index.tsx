import React from 'react'
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
      className={`${isActive ? 'contact-animation' : ''} max-w-screen-2xl mx-auto px-8 py-24 min-h-screen md:min-h-0 relative`}>  
      <div className="title">
        <Title>
          Contact
        </Title>
        <SubTitle>
          <div className="font-poppins md:w-1/2 w-4/5">
            Open to conversations — feel free to reach out.
          </div> 
        </SubTitle>
      </div>
      <p className="md:w-1/4 w-2/3 mt-12 font-poppins text-gray-300 content">
        Find me on social media, or just drop a message via the contact form.
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
      <div className="fixed bottom-12 right-10">
        <Button
          link="/downloads"
          customClass="px-10 py-2 rounded-full font-bold h-auto bg-primary-gradient hover:opacity-60">
          Get Resume
        </Button>
      </div>
    </section>
  )
}

export default Contact

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { user } from '../../../state'

import Title from '../title'
import SubTitle from '../subtitle'
import Input from '../../common/input'
import Button from '../../common/button'
import Form from '../../common/form'
import TextArea from '../../common/textarea'

type Notice = { type: 'success' | 'error'; text: string } | null

const Contact = () => {
  const { asPath } = useRouter()
  const isActive = asPath.includes('contact')
  const [notice, setNotice] = useState<Notice>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formKey, setFormKey] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // auto-hide message
  useEffect(() => {
    if (!notice) return
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setNotice(null), 5000) // 5 detik
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [notice])

  const onSubmit = async (data: any) => {
    if (isSubmitting) return data

    setIsSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await res.json().catch(() => ({}))

      if (res.ok) {
        setNotice({ type: 'success', text: 'Message sent successfully!' })
        // reset form
        setFormKey(k => k + 1)
      } else {
        setNotice({
          type: 'error',
          text: result?.message || 'Failed to send message. Please try again.',
        })
      }
    } catch (e) {
      setNotice({ type: 'error', text: 'An error occurred. Please try again later.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className={`${isActive ? 'contact-animation' : ''} max-w-screen-2xl mx-auto px-8 py-24 min-h-screen md:min-h-0 relative`}
    >
      <div className="title">
        <Title>Contact</Title>
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
        {/* feedback message */}
        {notice && (
          <div
            role="status"
            className={`mt-4 rounded-md border px-3 py-2 text-sm ${
              notice.type === 'success'
                ? 'border-green-500/40 bg-green-500/10 text-green-400'
                : 'border-red-500/40 bg-red-500/10 text-red-400'
            }`}
          >
            {notice.text}
          </div>
        )}
        <Form key={formKey} id="contact-form" onSubmit={onSubmit}>
          <Input
            {...{
              name: 'name',
              label: "What's your name",
              minLength: 2,
              required: true,
              message: 'Your name is required.',
            }}
          />
          <Input
            {...{
              name: 'email',
              label: 'Your email address',
              minLength: 10,
              required: true,
              message: 'Your email is required.',
            }}
          />
          <TextArea
            {...{
              name: 'message',
              label: 'Type your message here',
              minLength: 20,
              required: true,
              message: 'Your message is required.',
            }}
          />
          <Button type="submit">
            {isSubmitting ? 'Sending…' : 'Send message'}
          </Button>
        </Form>
      </div>

      <div className="absolute md:bottom-16 right-4 bottom-6">
        <Button
          link="/downloads"
          customClass="px-10 py-2 rounded-full font-bold h-auto bg-primary-gradient hover:opacity-60"
        >
          Get Resume
        </Button>
      </div>
    </section>
  )
}

export default Contact

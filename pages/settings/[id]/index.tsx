import { useRouter } from 'next/router'
import Cookies from 'universal-cookie'
import MD5 from 'crypto-js/md5'
import React, { useEffect, useState } from 'react'

import { user } from '../../../state'

import Form from '../../../components/common/form'
import Input from '../../../components/common/input'
import Button from '../../../components/common/button'

const Settings: React.FC = () => {
  const router = useRouter()
  const cookies = new Cookies()
  const [state, setState] = useState({
    page: true
  })
  const onSubmit = (data: any) => {
    if (data.username === user.username && data.password === user.password) {
      for (let key in user) {
        // @ts-ignore
        cookies.set(`user_${key}`, encodeURI(JSON.stringify(user[key])), { maxAge: 864000, path: '/' })
      }
      const time = new Date().getTime().toString()
      router.push(`/form/${MD5(time)}`)
    }
  }

  useEffect(() => {
    if (router.query.id) {
      const limit = Math.floor(new Date(Date.now()).getTime() / 1000)
      if (Number(router.query.id)) {
        if ((limit - Number(router.query.id)) <= 300) {
          if (!state.page) setState(() => ({...{ page: true }}))
        } else {
          router.push('/')
        }
      } else {
        router.push('/')
      }
    }
  }, [router, state])

  return (
    <div
      className={`${state.page ? 'opacity-100 ' : 'opacity-0 ' }absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg border-t border-black border-opacity-10 rounded-xl md:w-1/3 2xl:w-1/4 w-4/5 px-8 py-8 transition-all ease-out duration-500`}>
      <div className="flex items-center justify-between">
        <div
          className="bg-primary-gradient rounded-lg h-10 w-10 flex items-center justify-center lg:shadow-lg shadow-gray-800 transition-all ease-out duration-300">
          <a
            className="font-audiowide bg-transparent text-3xl 2xl:text-4xl"
            title="Rizki Khair">
            R
          </a>
        </div>
        <span className="font-poppins text-gray-300 text-xl">
          Setting
        </span>
      </div>
      <div className="mt-16">
        <Form onSubmit={onSubmit.bind(this)}>
          <Input {
              ...{
                name: 'username',
                label: 'Username',
                minLength: 8,
                required: true,
                message: 'Your username is required.'
              }
            } 
          />
          <Input {
              ...{
                name: 'password',
                label: 'Password',
                minLength: 8,
                required: true,
                type: 'password',
                space: 'py-8',
                message: 'Your password is required.'
              }
            }
          />
          <Button type="submit">
            Sign in
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Settings
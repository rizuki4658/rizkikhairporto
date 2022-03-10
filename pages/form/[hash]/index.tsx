import { useRouter } from 'next/router'
import Cookies from 'universal-cookie'
import React, { useEffect, useState } from 'react'

import { user } from '../../../state'

import Form from '../../../components/common/form'
import Input from '../../../components/common/input'
import Button from '../../../components/common/button'

const SettingsForm: React.FC = () => {
  const router = useRouter()
  const cookies = new Cookies()
  const [state, setState] = useState({
    page: true
  })
  const onSubmit = (data: any) => {
    
  }

  useEffect(() => {
    if (router.query.hash) {
      const md5: any = /^[a-f0-9]{32}$/gi
      if (router.query.hash) {
        if (md5.test(router.query.hash)) {
          if (!state.page) setState(() => ({...{ page: true }}))
        } else {
          // router.push('/')
        }
      } else {
        // router.push('/')
      }
    }
  }, [router, state])

  return (
    <div
      className={`${state.page ? 'opacity-100 ' : 'opacity-0 ' }absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg border-t border-black border-opacity-10 rounded-xl w-11/12 md:max-w-4xl px-8 py-8 transition-all ease-out duration-500`}>
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
          Form
        </span>
      </div>
      <div className="mt-16">
        A
      </div>
    </div>
  )
}

export default SettingsForm
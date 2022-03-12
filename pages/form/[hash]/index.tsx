import { useRouter } from 'next/router'
import Cookies from 'universal-cookie'
import React, { useEffect, useState } from 'react'

import { user } from '../../../state'

import FormProfile from '../../../components/template/form/profile'
import FormAbout from '../../../components/template/form/about'
import FormSkills from '../../../components/template/form/skills'
import FormExperiences from '../../../components/template/form/experinces'
import FormWorks from '../../../components/template/form/works'
import FormSocmed from '../../../components/template/form/socmed'
import Link from 'next/link'

interface Props {
  key?: string
}

const FormComponent: React.FC<Props> = (props) => {
  if (props.key === 'profile') return <FormProfile />
  if (props.key === 'about') return <FormAbout />
  if (props.key === 'skills') return <FormSkills />
  if (props.key === 'experiences') return <FormExperiences />
  if (props.key === 'works') return <FormWorks />
  if (props.key === 'socmed') return <FormSocmed />
  return (<div />)
}

const SettingsForm: React.FC = () => {
  const router = useRouter()
  const cookies = new Cookies()
  const navbar = ['profile']
  
  for (let key in user) {
    if (!key.toLowerCase().includes('username')  && !key.toLowerCase().includes('email') && !key.toLowerCase().includes('password')) {
      navbar.push(key)
    }
  }
  
  const [state, setState] = useState({
    page: true,
    key: 'profile'
  })
  const onSubmit = (data: any) => {
    
  }

  const onSelectingNavbar = (key: string) => {
    setState((prev: any) => ({...{ page: prev.page, key }}))
  }

  useEffect(() => {
    if (router.query.hash) {
      const md5: any = /^[a-f0-9]{32}$/gi
      if (router.query.hash) {
        if (md5.test(router.query.hash)) {
          if (!state.page) setState((prev: any) => ({...{ page: true, key: prev.key }}))
        } else {
          router.push('/')
        }
      } else {
        router.push('/')
      }
    }
  }, [router, state])

  return (
    <div className={`${state.page ? 'opacity-100 ' : 'opacity-0 ' } md:max-w-6xl transition-all ease-out duration-500 flex item-center gap-8 flex-wrap mx-auto px-8 md:pt-16 pt-8 pb-8`}>
      <div
        className="shadow-lg border-t border-black border-opacity-10 rounded-xl px-6 py-6 w-full md:w-72">
        <div className="flex items-center justify-between gap-4">
          <div
            className="bg-primary-gradient rounded-lg h-10 w-10 flex items-center justify-center lg:shadow-lg shadow-gray-800 transition-all ease-out duration-300">
            <a
              className="font-audiowide bg-transparent text-3xl 2xl:text-4xl"
              title="Rizki Khair">
              R
            </a>
          </div>
          <span className="font-poppins text-gray-300 text-xl capitalize">
            {state.key}
            &nbsp;
            Form
          </span>
        </div>
        <div className="mt-10 md:block grid grid-cols-2 gap-8 md:space-y-8">
          {
            navbar.map((item: string, key: number) => (
              <button
                key={key}
                className={`block ${ state.key === item ? 'text-primary-gradient' : 'text-primary-gradient-hover'} font-poppins md:text-lg capitalize text-left text-white`}
                onClick={onSelectingNavbar.bind(this, item)}>
                  {item}
              </button>
            ))
          }
          <div>  
            <Link href={'/download'} passHref>
              <a
                target="_blank"
                className="bg-primary-gradient block text-center py-2.5 rounded-lg hover:opacity-50 mt-6">
                Download CV
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="shadow-lg border-t border-black border-opacity-10 rounded-xl px-6 py-6 flex-1">
        { FormComponent({...{key: state.key}}) }
      </div>
    </div>
  )
}

export default SettingsForm
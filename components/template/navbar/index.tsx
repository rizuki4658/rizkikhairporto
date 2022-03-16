import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { navigations } from '../../../constants'
import { Navigation } from '../../../types'

import Button from '../../common/button'

export default function Navbar() {
  const { asPath } = useRouter()
  const [state, setState] = useState({
    top: 0
  })

  const onScroll = ((e: any) => {
    const newTop = e.target.scrollingElement.scrollTop
    setState((prev) => ({...{top: newTop}}))
  })

  useEffect(() => {
    if (state.top > 0) {
      return
    }
    window.removeEventListener('scroll', onScroll, false)
    return window.addEventListener('scroll', onScroll, false)
  })

  return (
    <header
      className={`navbar fixed z-30 overflow-x-hidden ${state.top <= 0 ? 'bg-transparent' : 'bg-black bg-opacity-10'}`}>
      <div className="hidden md:block max-w-screen-2xl mx-auto px-8 py-2.5">
        <div className="hidden md:flex items-center justify-between gap-x-6 w-full">
          <div
            className="bg-primary-gradient rounded-lg h-10 w-10 flex items-center justify-center lg:shadow-lg shadow-gray-800 hover:shadow-none hover:opacity-80 transition-all ease-out duration-300">
            <Link href="/" scroll={true}>
              <a
                className="font-audiowide bg-transparent text-3xl 2xl:text-4xl"
                title="Rizki Khair">
                R
              </a>
            </Link>
          </div>
          <ul className="flex items-center gap-x-8">
            {
              navigations.map((item: Navigation, key: number) => (
                <li key={key}>
                  <Button
                    link={item.target}
                    title={item.name}
                    scroll={true}
                    customClass={`h-11 px-2 font-poppins text-gray-300 hover:text-white highlight-gradient ${asPath.includes(item.target) ? 'active' : '' }`}>
                    {item.name}
                  </Button>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className="block z-30 md:hidden bg-primary-dark border-t border-gray-400 border-opacity-25">
        <div className="max-w-screen-2xl mx-auto">
          <ul className="flex w-full items-center">
            {
              navigations.map((item: Navigation, key: number) => (
                <li key={key} className="w-full">
                  <Button
                    icon={item.name.toLowerCase()}
                    link={item.target}
                    title={item.name}
                    customClass="w-full py-2 h-16" />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </header>
  )
}
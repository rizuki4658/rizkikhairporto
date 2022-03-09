import Head from 'next/head'
import Link from 'next/link'

import { navigations } from '../../../constants'
import { Navigation } from '../../../types'

import Button from '../../common/button'

export default function Navbar() {
  return (
    <header className="navbar fixed z-30 overflow-hidden">
      <div className="hidden md:block max-w-screen-2xl mx-auto px-8 py-2.5">
        <div className="hidden md:flex items-center justify-between gap-x-6 w-full">
          <div
            className="bg-primary-gradient rounded-lg h-10 w-10 flex items-center justify-center lg:shadow-lg shadow-gray-800 hover:shadow-none hover:opacity-80 transition-all ease-out duration-300">
            <Link href="/">
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
                    customClass="highlight-gradient font-poppins text-gray-300 hover:text-white">
                    {item.name}
                  </Button>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className="block md:hidden bg-primary-dark border-t border-gray-400 border-opacity-25">
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
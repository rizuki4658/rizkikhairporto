import Head from 'next/head'
import Link from 'next/link'

import { navigations } from '../../../constants'
import { Navigation } from '../../../types'

import Button from '../../common/button'

export default function Navbar() {
  return (
    <header className="md:fixed z-30 top-0 left-0 right-0 overflow-hidden ">
      <div className="max-w-screen-2xl mx-auto px-8 py-2.5">
        <div className="hidden md:flex items-center justify-between gap-x-6 w-full">
          <div
            className="bg-primary-gradient rounded-lg h-10 w-10 flex items-center justify-center lg:shadow-lg shadow-gray-800 hover:shadow-none hover:opacity-80 transition-all ease-out duration-300">
            <Link href="/">
              <a
                className="font-audiowide text-3xl 2xl:text-4xl"
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
                    customClass="highlight-gradient font-poppins text-gray-400 hover:text-gray-500">
                    {item.name}
                  </Button>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </header>
  )
}
import Head from 'next/head'
import Link from 'next/link'

import { navigations } from '../../../constants'
import { Navigation } from '../../../types'

import Button from '../../common/button'

export default function Navbar() {
  return (
    <div className="md:fixed z-10 top-0 left-0 right-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 xl:px-0 py-2.5">
        <div className="hidden md:flex items-center justify-between gap-x-6 w-full">
          <div>Logo</div>
          <ul className="flex items-center gap-x-8">
            {
              navigations.map((item: Navigation, key: number) => (
                <li key={key}>
                  <Button
                    link={item.target}
                    title={item.name}
                    customClass="text-md hover:text-gray-500 text-gray-800">
                    {item.name}
                  </Button>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
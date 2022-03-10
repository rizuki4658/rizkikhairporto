import React from 'react'
import Button from '../../common/button'
import { socmed } from '../../../constants'

const Footer: React.FC = () => {
  return (
    <div className="bg-black bg-opacity-10 max-w-screen-2xl mx-auto px-8 py-2.5 md:mb-0 mb-16">
      <div className="flex items-center justify-between">
        <span className="text-gray-500 hover:text-gray-200 cursor-default">
          &copy; 2021 Rizki Khair
        </span>
        <div className="grid grid-cols-3 gap-4">
          {
            socmed.map((item, key) => (
              <Button
                key={key}
                icon={item.name}
                title={item.title}
                link={item.link}
                customClass="w-7 h-7" />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Footer

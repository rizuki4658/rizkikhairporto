import React from 'react'

const Title: React.FC = ({ ...props }) => {
  return (
    <div className="flex items-center gap-6">
      <div className="bg-primary-gradient h-1 w-6 rounded-md" />
      <h1 className="md:text-base lg:text-base text-sm font-poppins font-semibold text-gray-300">
        {props.children}
      </h1>
    </div>
  )
}

export default Title
import React from 'react'

const SubTitle: React.FC = ({ ...props }) => {
  return (
    <h2 className="md:text-3xl lg:text-4xl text-2xl font-poppins my-4 font-semibold text-white">
      {props.children}
    </h2>
  )
}

export default SubTitle
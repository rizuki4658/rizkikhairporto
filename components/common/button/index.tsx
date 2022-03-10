import Link from 'next/link'
import React from 'react'
import { Button as ButtonTypes } from '../../../types'

const MyLink = (props: any) => {
  return (
    <Link
      href={props.link} 
      scroll={props.scroll}>
      <button
        title={props.title}
        className={`rounded-sm h-11 px-2 ${props.customClass}`}>
        {props.label}
      </button>
    </Link>
  )
}

const MyButton = (props: any) => {
  if (props.icon && props.link) {
    return(
      <Link href={props.link}>
        <a
          title={props.title}
          target={props.target}
          className={`btn-icon cursor-pointer rounded-full icon flex items-center justify-center ${props.customClass}`}>
          <div 
            style={{
              WebkitMaskImage: `url('/icons/${props.icon}.svg')`
            }}
            className="mask-icon w-2/3 h-2/3"
          />
        </a>
      </Link>
    )
  } else if (props.icon && !props.link) {
    return(
      <button
        title={props.title}
        className={`btn-icon cursor-pointer rounded-full icon flex items-center justify-center ${props.customClass}`}
        onClick={() => props.onClick() }>
        <div 
          style={{
            WebkitMaskImage: `url('/icons/${props.icon}.svg')`
          }}
          className="mask-icon w-2/3 h-2/3"
        />
      </button>
    )
  }
  return (
    <button
      type={props.type ? props.type : 'button'}
      className="bg-primary-gradient-hover hover:text-white text-gray-300 py-2.5 px-6 font-poppins rounded-lg border border-black border-opacity-10 block md:inline-block text-center font-semibold">
      {props.children}
    </button>
  )
}

const Button: React.FC<ButtonTypes> = ({ ...props }) => {
  const { link, children, title, customClass, icon, onClick, scroll } = props
  if (link && !icon) {
    return (
      <MyLink
        link={link}
        label={children}
        title={title}
        scroll={scroll}
        customClass={customClass} />
    )
  }
  return <MyButton {...props} />
}

export default Button
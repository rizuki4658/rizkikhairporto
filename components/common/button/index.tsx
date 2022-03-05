import Link from 'next/link'
import React from 'react'
import { Button as ButtonTypes } from '../../../types'

const MyLink = (props: any) => {
  return (
    <Link href={props.link}>
      <button
        title={props.title}
        className={`rounded-sm bg-primary-gradient h-11 px-2 highlight-gradient ${props.customClass}`}>
        {props.label}
      </button>
    </Link>
  )
}

const MyButton = (props: any) => {
  return (
    <button>{props.children}</button>
  )
}

const Button: React.FC<ButtonTypes> = ({ ...props }) => {
  const { link, children, title, customClass } = props
  if (link) {
    return (
      <MyLink
        link={link}
        label={children}
        title={title}
        customClass={customClass} />
    )
  }
  return <MyButton />
}

export default Button
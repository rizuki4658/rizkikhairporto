import React from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '../../../types'

const TextArea = (props: Input) => {
  const { register: singleRegister } = useForm()
  let newRegister: any = props.register
  const newError: any = props.formState && props.name ? props.formState.errors[props.name] ? props.message : '' : ''
  const attr = {...props}
  delete attr.register
  if (!props.register) {
    newRegister = singleRegister
  }

  return (
    <div>
      <div className="mb-2 font-poppins">
        <label
          htmlFor={`__${props.name}`}
          className="cursor-pointer">
          {props.label}
        </label>
      </div>
      <div className="relative bg-gray-800 bg-opacity-30">
        <textarea
          id={`__${props.name}`}
          {...newRegister(props.name, {...attr})}
          className={`my-input ${newError ? 'error' : ''} text-sm`}
        />
        <div className="my-input-highlight" />
      </div>
      <p className={`text-red-500 ${newError ? 'opacity-100 h-auto' : 'h-1 opacity-0'} text-xs py-2 transition-all ease-in-out duration-200`}>{newError ? newError : ''}</p>
    </div>
  )
}

export default TextArea
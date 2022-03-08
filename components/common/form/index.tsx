import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({ defaultValues, children, onSubmit }: any) => {
  const { handleSubmit, register, formState } = useForm({ defaultValues })

  return (
    <form
      className="xl:text-lg md:text-base text-sm text-white md:space-y-10 space-y-6"
      onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    formState,
                    key: child.props.name
                  }
                })
              : child;
          })
        : children}
    </form>
  )
}

export default Form

import React, { useState } from "react"
import Cookies from 'universal-cookie'
import { user } from '../../../state'

const FormAbout: React.FC = () => {
  const cookies = new Cookies()
  let storage: any = cookies.get('user_about') ? JSON.parse(decodeURI(cookies.get('user_about'))) : user.about

  const [state, setState] = useState({
    ...storage
  })

  const onSubmit = (data: any) => {
    data.preventDefault();
    for (let key in state) {
      if (state[key].type) {
        cookies.set(`user_${key}`, encodeURI(JSON.stringify(state[key].value)), { maxAge: 864000, path: '/' })
      } else {
        cookies.set(`user_${key}`, encodeURI(JSON.stringify(state[key])), { maxAge: 864000, path: '/' })
      }
    }
    storage = {...state}
  }

  const onChange = (e: any) => {
    setState((prev: any) => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }

  return (
    <form
      className="md:w-2/3 mx-auto text-gray-300 p-8 space-y-4"
      onSubmit={onSubmit.bind(this)}>
      <div>
        <div className="text-sm font-poppins mb-2">
          <label htmlFor="title" className="capitalize">
            Title
          </label>
        </div>
        <div className="relative bg-gray-800 bg-opacity-30">
          <input
            id="title"
            defaultValue={storage.title}
            type="text"
            name="title"
            className="my-input text-sm"
            onChange={onChange.bind(this)}
          />
          <div className="my-input-highlight" />
        </div>
      </div>
      <div>
        <div className="text-sm font-poppins mb-2">
          <label htmlFor="description" className="capitalize">
            Description
          </label>
        </div>
        <div className="relative bg-gray-800 bg-opacity-30">
          <textarea
            id="description"
            defaultValue={storage.description}
            name="description"
            rows={10}
            className="my-input text-sm"
            onChange={onChange.bind(this)}
          />
          <div className="my-input-highlight" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button
          type="submit"
          className="bg-primary-gradient-hover text-gray-300 py-2.5 px-6 font-poppins rounded-lg border border-black border-opacity-10 block md:inline-block text-center font-semibold text-sm">
          Save
        </button>
        <button
          type="reset"
          className="bg-primary-gradient-hover text-gray-300 py-2.5 px-6 font-poppins rounded-lg border border-black border-opacity-10 block md:inline-block text-center font-semibold text-sm">
          Cancel
        </button>
      </div>
    </form>
  )
}

export default FormAbout
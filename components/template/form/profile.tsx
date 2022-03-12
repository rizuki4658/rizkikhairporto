import React, { useState } from "react"
import Cookies from 'universal-cookie'
import { user } from '../../../state'

const FormProfile: React.FC = () => {
  const cookies = new Cookies()
  let storage: any = {
    username: cookies.get('user_username') ? decodeURI(cookies.get('user_username')).toString().replace(/[^\w\s]/gi, '') : user.username,
    email: {
      value: cookies.get('user_email') ? decodeURI(cookies.get('user_email')).toString().replace(/[^\w\s\.\@]/gi, '') : user.email,
      type: 'email'
    },
    password: {
      value: cookies.get('user_password') ? decodeURI(cookies.get('user_password')).toString().replace(/[^\w\s]/gi, '') : user.password,
      type: 'password'
    }
  }

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

  const onChange = (key: any, e: any) => {
    setState((prev: any) => ({
      ...prev,
      [key]: prev[key].type ? { value: e.target.value, type: prev[key].type } : e.target.value
    }))
  }

  return (
    <form
      className="md:w-2/3 mx-auto text-gray-300 p-8 space-y-4"
      onSubmit={onSubmit.bind(this)}>
      {
        Object.keys(storage).map((item: string, key: number) => (
          <div key={key}>
            <div className="text-sm font-poppins mb-2">
              <label htmlFor={`__${item}`} className="capitalize">
                { item }
              </label>
            </div>
            <div className="relative bg-gray-800 bg-opacity-30">
              <input
                id={`__${item}`}
                defaultValue={storage[item] && storage[item].value ? storage[item].value : storage[item]}
                type={ state[`${item}`] && state[`${item}`].type ? state[`${item}`].type : 'text' }
                className="my-input text-sm"
                onChange={onChange.bind(this, item)}
              />
              <div className="my-input-highlight" />
            </div>
          </div>
        ))
      }
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

export default FormProfile
import React, { useState } from "react"
import Cookies from 'universal-cookie'
import { user } from '../../../state'

const FormSkills: React.FC = () => {
  const cookies = new Cookies()
  let storage: any = {
    skills: cookies.get('user_skills') ? JSON.parse(decodeURI(cookies.get('user_skills'))) : user.skills,
  }

  const [state, setState] = useState({
    ...storage
  })

  const onSubmit = (data: any) => {
    data.preventDefault();
    cookies.set(`user_skills`, encodeURI(JSON.stringify(state.skills)), { maxAge: 864000, path: '/' })
    storage = {...state}
  }

  const onChange = (item: any, e: any) => {
    const select = [...storage.skills].findIndex((data: any) => data === item)
    
    setState((prev: any) => {
      prev.skills[select].value = Number(e.target.value)
      return {...prev}
    })
  }

  return (
    <form
      className="md:w-2/3 mx-auto text-gray-300 p-8 space-y-8"
      onSubmit={onSubmit.bind(this)}>
      {
        storage.skills.map((item: any, key: number) => (
          <div key={key}>
            <div className="text-sm font-poppins mb-2">
              <label htmlFor={`__${item.name}`} className="capitalize">
                { item.name }
              </label>
            </div>
            <div className="relative bg-gray-800 bg-opacity-30">
              <input
                id={`__${item}`}
                defaultValue={item.value}
                type="number"
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
          className={`bg-primary-gradient-hover text-gray-300 py-2.5 px-6 font-poppins rounded-lg border border-black border-opacity-10 block md:inline-block text-center font-semibold text-sm`}>
          Save
        </button>
        <button
          type="reset"
          className={`'bg-primary-gradient-hover text-gray-300 py-2.5 px-6 font-poppins rounded-lg border border-black border-opacity-10 block md:inline-block text-center font-semibold text-sm`}>
          Cancel
        </button>
      </div>
    </form>
  )
}

export default FormSkills
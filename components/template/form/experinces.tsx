import React, { useState } from "react"
import Cookies from 'universal-cookie'
import { user } from '../../../state'

const FormExperiences: React.FC = () => {
  const cookies = new Cookies()
  let storage: any = {
    experiences: cookies.get('user_experiences') ? JSON.parse(decodeURI(cookies.get('user_experiences'))) : user.experiences,
  }

  const [state, setState] = useState({
    experiences: storage.experiences.map((item: any) => ({...item, show: false})),
    showAdd: false
  })

  const onSubmit = (data: any) => {
    data.preventDefault();
    const setter = state.experiences.map((item: any) => ({
      name: item.name,
      date: item.date,
      image: item.image,
      link: item.link
    }))
    cookies.set(`user_experiences`, encodeURI(JSON.stringify(setter)), { maxAge: 864000, path: '/' })
    storage = {...state}
  }

  const onChange = (item: any, e: any) => {
    const select = [...state.experiences].findIndex((data: any) => data === item)
    const key = e.target.id.replace(`__${select}_`, '')
    setState((prev: any) => {
      if (key === 'date') {
        prev.experiences[select][key][e.target.name] = e.target.value
      } else {
        prev.experiences[select][key] = e.target.value
      }
      return {...prev}
    })
  }

  const showing = (item: any) => {
    const key = [...state.experiences].findIndex((data: any) => data === item)
    setState((prev: any) => {
      prev.experiences[key].show = !item.show
      return {...prev}
    })
  }

  const deleting = (key: number) => {
    const experiences = [...state.experiences].filter((item: any, index: number) => index !== key)
    setState((prev: any) => {
      prev.experiences = experiences
      return {...prev}
    })
    storage = {...state}
  }

  const onSubmitAdd = (item: any) => {
    item.preventDefault()
    const data: any = {}
    for (let i = 0; i < 5; ++i) {
      data[item.target[i].id] = item.target[i].value
    }
    setState((prev: any) => {
      const newExp = {
        name: data.name,
        image: data.image,
        link: data.link,
        date: {
          start: data.date_start,
          end: data.date_end
        },
        show: false
      }
      prev.experiences.push({
        ...newExp
      })
      prev.showAdd = false
      return {...prev}
    })
  }

  const showingSubmit = () => {
    setState((prev: any) => {
      prev.showAdd = prev.showAdd ? false : true
      return {...prev}
    })
  }

  return (
    <>
      <div>
        <button
            className={`bg-primary-gradient-hover text-gray-300 py-2 px-4 font-poppins rounded-lg border border-black border-opacity-10 block md:inline-block text-center font-semibold text-sm`}
            onClick={showingSubmit.bind(this)}>
            { state.showAdd ? 'Remove' : 'Add'}
          </button>
        </div>
      <form
        className={`${state.showAdd ? 'visible opacity-100 ' : 'hidden opacity-0 '}text-gray-300 p-8 space-y-10`}
        onSubmit={onSubmitAdd.bind(this)}>
        <div className="transition-all ease-in-out duration-200 space-y-6 md:w-2/3 mx-auto">
          <div>
            <div className="text-sm font-poppins mb-2">
              <label htmlFor="name" className="capitalize">
                Name
              </label>
            </div>
            <div className="relative bg-gray-800 bg-opacity-30">
              <input
                id="name"
                defaultValue={''}
                type="text"
                className="my-input text-sm"
              />
              <div className="my-input-highlight" />
            </div>
          </div>
          <div>
            <div className="text-sm font-poppins mb-1">
              <label className="capitalize">
                Date
              </label>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div>
                <span className="text-xs italic lowercase">start (yyyy-mm-dd)</span>
                <div className="relative bg-gray-800 bg-opacity-30">
                  <input
                    id="date_start"
                    defaultValue={''}
                    type="date"
                    className="my-input text-sm"
                  />
                  <div className="my-input-highlight" />
                </div>
              </div>
              -
              <div>
                <span className="text-xs italic lowercase">end (yyyy-mm-dd)</span>
                <div className="relative bg-gray-800 bg-opacity-30">
                  <input
                    id="date_end"
                    defaultValue={''}
                    type="date"
                    className="my-input text-sm"
                  />
                  <div className="my-input-highlight" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-sm font-poppins mb-2">
              <label htmlFor="link" className="capitalize">
                Link
              </label>
            </div>
            <div className="relative bg-gray-800 bg-opacity-30">
              <input
                id="link"
                defaultValue={''}
                type="text"
                className="my-input text-sm"
              />
              <div className="my-input-highlight" />
            </div>
          </div>
          <div>
            <div className="text-sm font-poppins mb-2">
              <label htmlFor="image" className="capitalize">
                Image
              </label>
            </div>
            <div className="relative bg-gray-800 bg-opacity-30">
              <input
                id="image"
                defaultValue={''}
                type="text"
                className="my-input text-sm"
              />
              <div className="my-input-highlight" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            type="submit"
            className={`bg-primary-gradient-hover text-gray-300 py-2 px-4 font-poppins rounded-lg border border-black border-opacity-10 block md:inline-block text-center font-semibold text-sm`}>
            Add
          </button>
          <button
            type="reset"
            className={`bg-primary-gradient-hover text-gray-300 py-2 px-4 font-poppins rounded-lg border border-black border-opacity-10 block md:inline-block text-center font-semibold text-sm`}>
            Cancel
          </button>
        </div>
        <hr className="opacity-10" />
      </form>
      <form
        className="text-gray-300 p-8 space-y-10"
        onSubmit={onSubmit.bind(this)}>
        {
          state.experiences.map((item: any, key: number) => (
            <div key={key} className={key === state.experiences.length - 1 && item.show ? '' : 'border-b border-black border-opacity-30 pb-8'}>
              <div className={`${item.show ? 'mb-8 text-xs transition-all ease-in-out duration-200 text-primary-gradient ' : 'text-primary-gradient-hover '}flex gap-4`}>
                <button type="button" onClick={showing.bind(this, item)}>
                  { item.name }
                </button>
                <button type="button" onClick={deleting.bind(this, key)}>
                  x
                </button>
              </div>
              <div className={`${item.show ? 'h-96 ' : 'h-0 overflow-hidden '}transition-all ease-in-out duration-200 space-y-6 md:w-2/3 mx-auto`}>
                <div>
                  <div className="text-sm font-poppins mb-2">
                    <label htmlFor={`__${key}_name`} className="capitalize">
                      Name
                    </label>
                  </div>
                  <div className="relative bg-gray-800 bg-opacity-30">
                    <input
                      id={`__${key}_name`}
                      defaultValue={item.name}
                      type="text"
                      className="my-input text-sm"
                      onChange={onChange.bind(this, item)}
                    />
                    <div className="my-input-highlight" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-poppins mb-1">
                    <label htmlFor={`__${key}_date`} className="capitalize">
                      Date
                    </label>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <span className="text-xs italic lowercase">start (yyyy-mm-dd)</span>
                      <div className="relative bg-gray-800 bg-opacity-30">
                        <input
                          id={`__${key}_date`}
                          name="start"
                          defaultValue={item.date.start}
                          type="date"
                          className="my-input text-sm"
                          onChange={onChange.bind(this, item)}
                        />
                        <div className="my-input-highlight" />
                      </div>
                    </div>
                    -
                    <div>
                      <span className="text-xs italic lowercase">end (yyyy-mm-dd)</span>
                      <div className="relative bg-gray-800 bg-opacity-30">
                        <input
                          id={`__${key}_date`}
                          name="end"
                          defaultValue={item.date.end}
                          type="date"
                          className="my-input text-sm"
                          onChange={onChange.bind(this, item)}
                        />
                        <div className="my-input-highlight" />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-poppins mb-2">
                    <label htmlFor={`__${key}_link`} className="capitalize">
                      Link
                    </label>
                  </div>
                  <div className="relative bg-gray-800 bg-opacity-30">
                    <input
                      id={`__${key}_link`}
                      defaultValue={item.link}
                      type="text"
                      className="my-input text-sm"
                      onChange={onChange.bind(this, item)}
                    />
                    <div className="my-input-highlight" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-poppins mb-2">
                    <label htmlFor={`__${key}_image`} className="capitalize">
                      Image
                    </label>
                  </div>
                  <div className="relative bg-gray-800 bg-opacity-30">
                    <input
                      id={`__${key}_image`}
                      defaultValue={item.image}
                      type="text"
                      className="my-input text-sm"
                      onChange={onChange.bind(this, item)}
                    />
                    <div className="my-input-highlight" />
                  </div>
                </div>
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
            className={`bg-primary-gradient-hover text-gray-300 py-2.5 px-6 font-poppins rounded-lg border border-black border-opacity-10 block md:inline-block text-center font-semibold text-sm`}>
            Cancel
          </button>
        </div>
      </form>
    </>
  )
}

export default FormExperiences
import React from 'react'

interface Input {
  type?: string | null | undefined
}

interface State {
  value: string | number | boolean
}

class MyInput extends React.Component<Input, State> {
  state: State = {
    value: ''
  }

  inputByType(type: string | null | undefined) {
    if (type === 'textarea') {
      return (
        <>
          <textarea className="my-input" />
          <div className="my-input-highlight -bottom-10" />
        </>
      )
    }

    return (
      <>
        <input
          type="text"
          className="my-input"
        />
        <div className="my-input-highlight" />
      </>
    )
  }

  render() {
    return (
      <div className="relative bg-gray-800 bg-opacity-30">
        { this.inputByType(this.props.type) }
      </div>
    )
  }
}

export default MyInput
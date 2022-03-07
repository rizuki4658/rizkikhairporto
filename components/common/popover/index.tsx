import React from 'react'

import { Popover as PopoverType } from '../../../types'
import PopoverContent from './content'

const Popover: React.FC<PopoverType> = ({...props}) => {
  return (
    <button className={`popover ${ props.trigger ? props.trigger === 'click' ? 'popover-click' : '' : '' }`}>
      <div>
        {props.children}
      </div>
      <PopoverContent {
        ...{
          messages: props.messages,
          width: props.width ? props.width : 200,
          theme: props.theme,
          customClass: props.customClass,
          position: props.position
        }
      } />
    </button>
  )
}

export default Popover
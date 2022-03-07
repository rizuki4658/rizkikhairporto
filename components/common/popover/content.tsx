import React from 'react'
import { Popover } from '../../../types'

const PopoverContent: React.FC<Pick<Popover, 'messages' | 'width' | 'theme' | 'customClass' | 'position'>> = ({...props}) => {
  const __html: string = props.messages ? props.messages : ''

  return (
    <div 
      style={{
        width: props.width
      }}
      className={`popover-content ${props.position ? props.position : ''} ${ props.theme ? props.theme === 'dark' ? 'bg-primary-dark' : 'bg-light' : 'bg-light'} px-8 py-2 rounded-full ${props.customClass}`}>
      <div dangerouslySetInnerHTML={{ __html }} />
    </div>  
  )
}

export default PopoverContent
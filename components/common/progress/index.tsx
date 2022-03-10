import React from 'react'
import { Skill } from '../../../types'

import Button from '../button'

const Progress: React.FC<Skill> = ({ ...props }) => {
  return (
    <div className={`font-montserrat my-1.5 flex items-start gap-x-4 ${props.customClass}`}>
      <div className="flex-1">
        <span className="text-xs">{ props.name }</span>
        <div className="bg-gray-400 bg-opacity-10 h-1.5 rounded">
          <div
            style={{
              width: `${props.value}%`
            }}
            className="bg-primary-gradient h-full rounded"
          />
        </div>
      </div>
      <div className="text-sm">
        <Button
          icon={props.icon}
          customClass="w-8 h-8"
        />
      </div>
    </div>
  )
}

export default Progress
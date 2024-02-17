import React from 'react'
import { RiLoader2Line } from 'react-icons/ri'

const InitElem = ({initializingText}) => {
  return (
    <div className='flex items-center gap-3'>
      <RiLoader2Line/>
      <p>{initializingText}</p>
      </div>
  )
}

export default InitElem

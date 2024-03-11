import React from 'react'
import { PiList } from "react-icons/pi";

const TaskTabList = ({list}) => {
  return (
    <div className={`flex items-center gap-3 py-3 px-6 relative after:content-[""] after:w-full after:h-[1px] after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 cursor-pointer min-w-min text-nowrap`}>
      <PiList/>
      <span>{list}</span>
    </div>
  )
}

export default TaskTabList

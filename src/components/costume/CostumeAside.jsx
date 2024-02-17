import React from 'react'
import { useSelector } from 'react-redux'

const CostumeAside = ({children}) => {
  const {toggleObj} = useSelector(store => store.page)
  return (
    <aside
      className={`w-[250px] h-full bg-[#EEEEEE] flex p-2 flex-col border-r border-black gap-2 fixed md:relative ${
        toggleObj.editorAside ? "translate-x-0" : "-translate-x-[100%]"
      } md:translate-x-0 z-10`}
    >
      <h2 className="text-center text-xl md:py-4 pt-[3px] pl-[46px]">
        Your documents
      </h2>
      {children}
      </aside>
  )
}

export default CostumeAside

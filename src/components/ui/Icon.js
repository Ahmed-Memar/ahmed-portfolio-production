import React from 'react'

function Icon({children}) {
  return (
    <div className="hover:bg-[#0c8f68] w-max bg-gray-400 rounded-full p-2 hover:scale-105 transition-all duration-1000">
      {children}
    </div>
  )
}
//#16f2b3
export default Icon
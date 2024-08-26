import React from 'react'

function FeaturesCard({title,body}) {
  return (
    <div className="flex flex-col gap-5 shadow-md shadow-gray-600/90 p-3 rounded-2xl hover:scale-100 hover:shadow-sky-800 hover: md:scale-95 transition-transform duration-1000">
        <h3 className="title-green font-black rounded-md shadow-md shadow-inherit text-center text-2xl py-2 sm:text-3xl">{title}</h3>
        <p className="text-sm sm:text-base leading-relaxed p-3">{body}</p>
    </div>
  )
}

export default FeaturesCard
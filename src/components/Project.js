import React from 'react'

function Project({ title, desc, link, lang, dotClr }) {
  return (
    <div className="border-4 border-white rounded-xl m-5 p-3">
      <h4 className="text-2xl font-bold">{title}</h4>
      <p className="block max-w-[99%] whitespace-nowrap overflow-hidden text-ellipsis py-2">{desc}</p>
      <div className="flex items-center mb-5">
        <div className={`${dotClr} h-3 w-3 rounded-full mr-1`}></div>
        <p>{lang}</p>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <button className="bg-pacio-300 font-bold py-2 px-5 rounded-lg hover:scale-95 transition-transform shadow shadow-pacio-300">
          Check it out!
        </button>
      </a>
    </div>
  )
}

export default Project
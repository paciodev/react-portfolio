import React from 'react'

function ProjectFull({ title, description, techs, dotClr, gitRepo, liveUrl }) {
  return (
    <div className="bg-pacio-200 flex flex-col items-start rounded-xl p-3">
      <h5 className="text-xl md:text-2xl font-semibold mb-2">{title}</h5>
      <p className="mb-2">{description}</p>
      <p className="flex flex-row items-baseline mb-2 font-semibold">
        <div className={`${dotClr} h-3 w-3 rounded-full mr-1 flex-shrink-0`}></div> {techs}
      </p>
      <a
        className={`text-white bg-pacio-300 py-1 px-3 rounded-md mb-2 hover:opacity-80 transition-opacity ${!gitRepo && 'opacity-50 cursor-not-allowed hover:opacity-50'}`}
        href={gitRepo ? gitRepo : '#'}
        target={gitRepo ? '_blank' : ''}
        rel="noreferrer"
      >{gitRepo ? "Github repo" : "Github repo not available"}</a> 
      <a
        className={`text-white bg-pacio-300 py-1 px-3 rounded-md hover:opacity-80 transition-opacity ${!liveUrl && 'opacity-80 cursor-not-allowed hover:opacity-50'}`}
        href={liveUrl ? liveUrl : '#'}
        target={liveUrl ? '_blank' : ''}
        rel="noreferrer"
      >{liveUrl ? "Live preview" : "Live preview not available"}</a> 
    </div> 
  )
}

export default ProjectFull
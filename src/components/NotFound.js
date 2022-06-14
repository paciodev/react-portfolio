import React from 'react'

function NotFound() {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center ml-[70px]">
      <h1 className="text-5xl md:text-8xl">404</h1>
      <hr className="w-1/4 my-5"/>
      <h1 className="text-3xl md:text-5xl">Page not found</h1>
    </div>
  )
}

export default NotFound
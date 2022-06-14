import React from 'react'

function Social({ src, link }) {
  return (
    <div>
      <img
        src={src}
        alt=""
        className="w-full h-full max-w-[150px]"
      />
    </div>
  )
}

export default Social
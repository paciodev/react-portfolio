import React from 'react'

function QuestionAndAnswer({ question, answer }) {
  return (
    <li>
      <h4 className="text-xl  font-bold">{question}</h4>
      <p className="text-md font-semibold">{answer}</p>
      <hr className="w-1/2 h-[2px] bg-black my-2"/>
    </li>
  )
}

export default QuestionAndAnswer
import React from 'react'

const Message = ({text, author, time, id}) => {
  return (
    <div>
        <span>{author}</span>
        <p>{text}</p>
        <span>Hora: {time}</span>
        <hr/>
    </div>
  )
}

export default Message
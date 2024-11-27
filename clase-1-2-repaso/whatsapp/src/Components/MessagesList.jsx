import React from 'react'
import Message from './Message'

const MessagesList = ({messages}) => {

  return (
    <div>
        {
            messages.map(message => {
                return <Message 
                        key={message.id}
                        id={message.id} 
                        text={message.text} 
                        author={message.author} 
                        time={message.time}
                    />
            })
        }
    </div>
  )
}

export default MessagesList
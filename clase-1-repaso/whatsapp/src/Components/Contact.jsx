import React from 'react'
import { Link } from 'react-router-dom'

const Contact = ({name, id}) => {
  return (
    <Link to={`/contact/${id}`} >
        <h3>{name}</h3>
    </Link>
  )
}

export default Contact
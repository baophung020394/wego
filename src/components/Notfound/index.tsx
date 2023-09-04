import React from 'react'
import './Notfound.scss'

interface NotFoundProps {
  message?: string
  searchTerm: string
  categoryName: string
}

const NotFound: React.FC<NotFoundProps> = ({ searchTerm, categoryName }) => {
  return (
    <div className='not-found'>
      <h1>Not Found</h1>
      <p>{`${searchTerm} was not found in the ${categoryName}`}</p>
    </div>
  )
}

export default NotFound

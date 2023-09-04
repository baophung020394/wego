import React, { ReactNode } from 'react'
import './CardItem.scss'

interface CardProps {
  backgroundColor?: string
  color?: string
  children: ReactNode
  className?: string
}

const Card: React.FC<CardProps> = ({ backgroundColor = 'transparent', children, className = 'card' }) => {
  const CardStyle: React.CSSProperties = {
    backgroundColor,
    cursor: 'pointer'
  }

  return (
    <div style={CardStyle} className={className}>
      {children}
    </div>
  )
}

export default Card

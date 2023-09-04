import React, { ReactNode } from 'react'
import './CardItem.scss'

interface CardTextProps {
  backgroundColor?: string
  color?: string
  children: ReactNode
  className?: string
}

const CardText: React.FC<CardTextProps> = ({ backgroundColor = 'transparent', children, className = 'card__text' }) => {
  const CardTextStyle: React.CSSProperties = {
    backgroundColor
  }

  return (
    <div style={CardTextStyle} className={className}>
      {children}
    </div>
  )
}

export default CardText

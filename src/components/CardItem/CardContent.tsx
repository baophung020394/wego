import React, { ReactNode } from 'react'
import './CardItem.scss'

interface CardContentProps {
  backgroundColor?: string
  color?: string
  children: ReactNode
  className?: string
}

const CardContent: React.FC<CardContentProps> = ({
  backgroundColor = 'transparent',
  children,
  className = 'card__content'
}) => {
  const CardContentStyle: React.CSSProperties = {
    backgroundColor
  }

  return (
    <div style={CardContentStyle} className={className}>
      {children}
    </div>
  )
}

export default CardContent

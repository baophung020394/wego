import React, { ReactNode } from 'react'
import './CardItem.scss'

interface CardTitleProps {
  backgroundColor?: string
  color?: string
  children: ReactNode
  className?: string
}

const CardTitle: React.FC<CardTitleProps> = ({
  backgroundColor = 'transparent',
  children,
  className = 'card__title'
}) => {
  const CardTitleStyle: React.CSSProperties = {
    backgroundColor,
    cursor: 'pointer'
  }

  return (
    <p style={CardTitleStyle} className={className}>
      {children}
    </p>
  )
}

export default CardTitle

import React, { ReactNode } from 'react'
import './CardItem.scss'

interface CardButtonProps {
  backgroundColor?: string
  color?: string
  children: ReactNode
  className?: string
}

const CardButton: React.FC<CardButtonProps> = ({
  backgroundColor = 'transparent',
  children,
  className = 'card__buttons'
}) => {
  const CardButtonStyle: React.CSSProperties = {
    backgroundColor,
    cursor: 'pointer'
  }

  return (
    <div style={CardButtonStyle} className={className}>
      {children}
    </div>
  )
}

export default CardButton

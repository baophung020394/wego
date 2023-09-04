import React, { ReactNode } from 'react'
import './CardItem.scss'

interface CardProps {
  backgroundColor?: string
  color?: string
  children: ReactNode
  className?: string
  dataAttribute?: string
}

const Card: React.FC<CardProps> = ({
  dataAttribute,
  backgroundColor = 'transparent',
  children,
  className = 'card'
}) => {
  const CardStyle: React.CSSProperties = {
    backgroundColor
  }

  return (
    <div style={CardStyle} className={className} data-testid={dataAttribute}>
      {children}
    </div>
  )
}

export default Card

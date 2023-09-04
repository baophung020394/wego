import React, { ReactNode } from 'react'
import './CardItem.scss'

interface CardPromotionProps {
  backgroundColor?: string
  color?: string
  children: ReactNode
  className?: string
}

const CardPromotion: React.FC<CardPromotionProps> = ({
  backgroundColor = 'transparent',
  children,
  className = 'card__promotion'
}) => {
  const CardPromotionStyle: React.CSSProperties = {
    backgroundColor
  }

  return (
    <div style={CardPromotionStyle} className={className}>
      {children}
    </div>
  )
}

export default CardPromotion

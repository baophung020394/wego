import store from '@stores/index'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux' // Import Provider
import { Food } from 'src/models/food'
import Item from '../'

const foodDataGift: Food = {
  id: '628b5decc94a27754f30e6f1',
  index: 0,
  rating: 3.9508,
  promotion: 'gift',
  isNew: false,
  categoryId: '6288a89fac9e970731bfaa7b',
  minCookTime: 80,
  maxCookTime: 100,
  restaurant: 'Niquent',
  name: 'Niquent Drinks',
  imageUrl: 'https://source.unsplash.com/random/400x400?Drinks'
}

const foodDataDiscount: Food = {
  id: '628b5decc94a27754f30e6f1',
  index: 0,
  rating: 3.9508,
  promotion: 'discount',
  isNew: false,
  categoryId: '6288a89fac9e970731bfaa7b',
  minCookTime: 80,
  maxCookTime: 100,
  restaurant: 'Niquent',
  name: 'Niquent Drinks',
  imageUrl: 'https://source.unsplash.com/random/400x400?Drinks'
}

const foodDataPlus: Food = {
  id: '628b5decc94a27754f30e6f1',
  index: 0,
  rating: 3.9508,
  promotion: '1+1',
  isNew: false,
  categoryId: '6288a89fac9e970731bfaa7b',
  minCookTime: 80,
  maxCookTime: 100,
  restaurant: 'Niquent',
  name: 'Niquent Drinks',
  imageUrl: 'https://source.unsplash.com/random/400x400?Drinks'
}

test('does not render promotion icon for unknown promotion', () => {
  const foodDataWithoutPromotion = { ...foodDataGift, promotion: null }
  render(<Item food={foodDataWithoutPromotion} />)
  const promotionIcon = screen.queryByAltText('') // Thay bằng alt text phù hợp
  expect(promotionIcon).not.toBeInTheDocument()
})

test('renders rating and cook time buttons', () => {
  render(<Item food={foodDataGift} />)
  const cookTimeButton = screen.getByText(`${foodDataGift.minCookTime} - ${foodDataGift.maxCookTime} min`)
  expect(cookTimeButton).toBeInTheDocument()
})

test('does not render "New" button for non-new items', () => {
  const foodDataNotNew = { ...foodDataGift, isNew: false }
  render(<Item food={foodDataNotNew} />)
  const newButton = screen.queryByText('New')
  expect(newButton).not.toBeInTheDocument()
})

test('renders discount promotion with text shadow', () => {
  render(<Item food={foodDataDiscount} />)
  const discountText = screen.getByText('%')
  expect(discountText).toBeInTheDocument()
  expect(discountText).toHaveStyle('textShadow: 0 0 2px #fbdac3')
})

test('renders 1+1 promotion', () => {
  const foodData1Plus1 = { ...foodDataPlus, promotion: '1+1' } as Food
  render(<Item food={foodData1Plus1} />)
  const promotionText = screen.getByText('1+1')
  expect(promotionText).toBeInTheDocument()
})

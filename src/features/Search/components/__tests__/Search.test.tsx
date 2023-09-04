import store from '@stores/index'
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux' // Import Provider
import { Food } from 'src/models/food'
import Search from '..'

const items: Food[] = [
  {
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
  },
  {
    id: '628b5decf39bcc4e982fc88a',
    index: 1,
    rating: 4.9874,
    promotion: '1+1',
    isNew: false,
    categoryId: '6288a89f1f0152b8c2cd512b',
    minCookTime: 120,
    maxCookTime: 140,
    restaurant: 'Boilicon',
    name: 'Boilicon Sushi',
    imageUrl: 'https://source.unsplash.com/random/400x400?Sushi'
  },
  {
    id: '628b5dec6678e96d75f2f7de',
    index: 2,
    rating: 3.4518,
    promotion: null,
    isNew: true,
    categoryId: '6288a89f1f0152b8c2cd512b',
    minCookTime: 100,
    maxCookTime: 120,
    restaurant: 'Quinex',
    name: 'Quinex Sushi',
    imageUrl: 'https://source.unsplash.com/random/400x400?Sushi'
  },
  {
    id: '628b5dec97eacf5e8a604bd7',
    index: 3,
    rating: 1.5975,
    promotion: 'gift',
    isNew: false,
    categoryId: '6288a89f7338764f2071a8a8',
    minCookTime: 120,
    maxCookTime: 140,
    restaurant: 'Perkle',
    name: 'Perkle Pizza',
    imageUrl: 'https://source.unsplash.com/random/400x400?Pizza'
  },
  {
    id: '628b5decf99b6a8dc80af3b6',
    index: 4,
    rating: 0.8644,
    promotion: null,
    isNew: true,
    categoryId: '6288a89fac9e970731bfaa7b',
    minCookTime: 70,
    maxCookTime: 90,
    restaurant: 'Zanymax',
    name: 'Zanymax Drinks',
    imageUrl: 'https://source.unsplash.com/random/400x400?Drinks'
  },
  {
    id: '628b5dec0690be0f73109de7',
    index: 5,
    rating: 4.7915,
    promotion: '1+1',
    isNew: true,
    categoryId: '6288a89fe6c2fe0b758360fe',
    minCookTime: 90,
    maxCookTime: 110,
    restaurant: 'Sunclipse',
    name: 'Sunclipse Desserts',
    imageUrl: 'https://source.unsplash.com/random/400x400?Desserts'
  }
]

describe('<Search />', () => {
  const mockOnSearch = jest.fn()
  const selectedCategoryId = 'someCategoryId'

  beforeEach(() => {
    render(<Search icon='icon-url' onSearch={mockOnSearch} selectedCategoryId={selectedCategoryId} />)
  })

  it('calls onSearch with the entered query and selectedCategoryId when input value changes', () => {
    const inputElement = screen.getByPlaceholderText('Enter restaurant name')

    // Simulate a user typing in the input field
    fireEvent.change(inputElement, { target: { value: 'test query' } })

    // Expect that the onSearch function was called with the correct arguments
    expect(mockOnSearch).toHaveBeenCalledWith('test query', selectedCategoryId)
  })
})

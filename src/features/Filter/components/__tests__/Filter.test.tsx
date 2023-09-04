import store from '@stores/index'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'; // Import Provider
import Filter from '..'; // Đảm bảo đường dẫn đúng

const items = [
  {
    id: '6288a89f1f0152b8c2cd512b',
    name: 'Sushi'
  },
  {
    id: '6288a89f7338764f2071a8a8',
    name: 'Pizza'
  },
  {
    id: '6288a89f70dc8cf93b71609b',
    name: 'Hot Meals'
  },
  {
    id: '6288a89fe6c2fe0b758360fe',
    name: 'Desserts'
  },
  {
    id: '6288a89fac9e970731bfaa7b',
    name: 'Drinks'
  }
]

test('renders categories from items prop', () => {
  render(
    <Provider store={store}>
      <Filter items={items} selectedCategoryId={null} onCategoryChange={() => {}} />
    </Provider>
  )

  items.forEach((item) => {
    const categoryButton = screen.getByText(item.name)
    expect(categoryButton).toBeInTheDocument()
  })
})

test('calls onCategoryChange with correct categoryId when a category button is clicked', () => {
  const onCategoryChange = jest.fn()

  render(
    <Provider store={store}>
      <Filter items={items} selectedCategoryId={null} onCategoryChange={onCategoryChange} />
    </Provider>
  )

  const categoryButton = screen.getByText('Sushi')
  fireEvent.click(categoryButton)

  expect(onCategoryChange).toHaveBeenCalledWith('6288a89f1f0152b8c2cd512b')
})

test('applies active style to "All" button when selectedCategoryId is null', () => {
  render(
    <Provider store={store}>
      <Filter items={[]} selectedCategoryId={null} onCategoryChange={() => {}} />
    </Provider>
  )

  const allButton = screen.getByText('All')
  expect(allButton).toHaveClass('filter__button--active')
})

test('renders categories when API call succeeds', async () => {
  render(
    <Provider store={store}>
      <Filter items={items} selectedCategoryId={null} onCategoryChange={() => {}} />
    </Provider>
  )
  expect(screen.getByTestId('all')).toBeInTheDocument()
  expect(screen.getByTestId('category-6288a89f1f0152b8c2cd512b')).toBeInTheDocument()
})

test('calls handleCategoryChange with null when "All" button is clicked', () => {
  // Tạo mock function để theo dõi việc gọi hàm handleCategoryChange
  const handleCategoryChangeMock = jest.fn()

  render(
    <Provider store={store}>
      <Filter items={[]} selectedCategoryId={null} onCategoryChange={handleCategoryChangeMock} />
    </Provider>
  )

  // Tìm và nhấp vào nút "All"
  const allButton = screen.getByText('All')
  fireEvent.click(allButton)

  // Kiểm tra xem hàm handleCategoryChange đã được gọi với tham số null
  expect(handleCategoryChangeMock).toHaveBeenCalledWith(null)
})

import React from 'react'
import { render, screen } from '@testing-library/react'
import Filter from '..' // Đảm bảo đường dẫn đúng
import { Provider } from 'react-redux' // Import Provider
import store from '@stores/index' // Thay thế bằng tệp cấu hình Redux của bạn
// import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

const items = [
  { id: '1', name: 'Category 1' },
  { id: '2', name: 'Category 2' }
  // Thêm các items khác nếu cần
]

const selectedCategoryId = '1' // Chọn một category để kiểm tra
const onCategoryChange = jest.fn() // Tạo một mock function để theo dõi việc gọi hàm này

test('should render todo component', async () => {
  render(
    <Provider store={store}>
      <Filter items={items} selectedCategoryId={selectedCategoryId} onCategoryChange={onCategoryChange} />
    </Provider>
  )
  const element = screen.getByText('All')
  expect(element).toBeInTheDocument()
})
// test('renders Filter component with categories', () => {
//   const { getByText } = render(
//     <Filter items={items} selectedCategoryId={selectedCategoryId} onCategoryChange={onCategoryChange} />
//   )

//   // Kiểm tra xem các nút category đã hiển thị
//   items.forEach((item) => {
//     const categoryButton = getByText(item.name)
//     // expect(categoryButton).toBeElem()

//     // Kiểm tra xem nút category đã có class "filter__button--active" khi được chọn
//     if (item.id === selectedCategoryId) {
//       expect(categoryButton).toHaveClass('filter__button--active')
//     }
//   })

//   // // Kiểm tra xem nút "All" đã có class "filter__button--active" khi selectedCategoryId là null
//   // const allButton = getByText('All')
//   // expect(allButton).toBeInTheDocument()
//   // if (selectedCategoryId === null) {
//   //   expect(allButton).toHaveClass('filter__button--active')
//   // }
// })

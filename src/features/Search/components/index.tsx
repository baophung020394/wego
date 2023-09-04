import React, { ReactNode, useEffect, useState } from 'react'
import './Search.scss'

interface SearchProps {
  onSearch: (query: string, categoryId: string | null) => void // Callback khi thực hiện tìm kiếm
  selectedCategoryId: string | null // categoryId từ Filter
  icon?: string | ReactNode // Định kiểu cho icon
}

const Search: React.FC<SearchProps> = ({ icon, onSearch, selectedCategoryId }) => {
  const [searchQuery, setSearchQuery] = useState<string>('')

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value
    setSearchQuery(query)
    // Gọi callback onSearch ngay sau khi người dùng thay đổi nội dung
    onSearch(query, selectedCategoryId)
  }

  useEffect(() => {
    onSearch(searchQuery, selectedCategoryId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, selectedCategoryId])

  // useEffect(() => {
  //   // Tạo một biến trạng thái để lưu trạng thái hiện tại của searchQuery và selectedCategoryId
  //   let currentSearchQuery = searchQuery
  //   let currentSelectedCategoryId = selectedCategoryId

  //   // Tạo một hàm để kiểm tra xem có thay đổi không
  //   const hasChanged = () => {
  //     return currentSearchQuery !== searchQuery || currentSelectedCategoryId !== selectedCategoryId
  //   }

  //   // Gọi onSearch nếu có sự thay đổi
  //   if (hasChanged()) {
  //     onSearch(currentSearchQuery, currentSelectedCategoryId)
  //     currentSearchQuery = searchQuery
  //     currentSelectedCategoryId = selectedCategoryId
  //   }
  // }, [searchQuery, selectedCategoryId, onSearch])

  return (
    <div className='search'>
      {typeof icon === 'string' ? (
        <img src={icon} alt='Icon' className='icon' />
      ) : (
        icon && <span className='icon'>{icon}</span>
      )}
      <input type='text' placeholder='Enter restaurant name' value={searchQuery} onChange={handleSearchChange} />
    </div>
  )
}

export default Search

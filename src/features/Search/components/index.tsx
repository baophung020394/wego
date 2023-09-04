import React, { ReactNode, useEffect, useState } from 'react'
import CloseIcon from '@assets/images/food/close.png'
import './Search.scss'

interface SearchProps {
  onSearch: (query: string, categoryId: string | null) => void
  selectedCategoryId: string | null
  icon?: string | ReactNode
}

const Search: React.FC<SearchProps> = ({ icon, onSearch, selectedCategoryId }) => {
  const [searchQuery, setSearchQuery] = useState<string>('')

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value
    setSearchQuery(query)
    onSearch(query, selectedCategoryId)
  }

  const handleClearSearch = () => {
    setSearchQuery('') // Xoá văn bản khi nút "X" được nhấn
    onSearch('', selectedCategoryId) // Gọi hàm onSearch để xử lý việc tìm kiếm
  }

  useEffect(() => {
    onSearch(searchQuery, selectedCategoryId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, selectedCategoryId])

  return (
    <div className='search'>
      {typeof icon === 'string' ? (
        <img src={icon} alt='Icon' className='icon' />
      ) : (
        icon && <span className='icon'>{icon}</span>
      )}
      <input type='text' placeholder='Enter restaurant name' value={searchQuery} onChange={handleSearchChange} />
      {searchQuery && (
        <button className='clear-button' onClick={handleClearSearch}>
          <img src={CloseIcon} alt='' />
        </button>
      )}
    </div>
  )
}

export default Search

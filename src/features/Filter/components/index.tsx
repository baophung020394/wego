import Button from '@components/Button'
import { setCategoryName } from '@stores/searchSlice'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Category } from 'src/models/category'
import './Filter.scss'

interface FilterProps {
  items: Category[] | null
  selectedCategoryId: string | null
  onCategoryChange: (categoryId: string | null) => void
}

const Filter: React.FC<FilterProps> = ({ items, selectedCategoryId, onCategoryChange }) => {
  const dispatch = useDispatch()
  const handleCategoryChange = (category: Category | null) => {
    if (category) {
      onCategoryChange(category?.id)
      dispatch(setCategoryName(category?.name))
    } else {
      onCategoryChange(null)
    }
  }

  return (
    <div className='filter'>
      <div className='filter__list'>
        <Button
          className={`${selectedCategoryId === null ? 'filter__button--active' : ''} filter__button`}
          onClick={() => handleCategoryChange(null)}
          data-test
        >
          All
        </Button>
        {items?.map((item: Category) => (
          <Button
            key={item.id}
            className={`${item.id === selectedCategoryId ? 'filter__button--active' : ''} filter__button`}
            onClick={() => handleCategoryChange(item)}
          >
            {item.name}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Filter

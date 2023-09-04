import NotFound from '@components/Notfound'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Food } from 'src/models/food'
import Item from '../Item'
import './ItemGrid.scss'
import { RootState } from '@stores/index'

interface ItemGridProps {
  items: Food[] | null
  selectedCategoryId: string | null
}

function ItemGrid({ items, selectedCategoryId }: ItemGridProps) {
  const [visibleItems, setVisibleItems] = useState<number>(9) // init quantity items
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm)
  const categoryName = useSelector((state: RootState) => state.search.categoryName)

  /**
   * Click and load more item
   */
  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6)
  }

  /**
   * Reset quantity items when change Filter Category
   */
  useEffect(() => {
    setVisibleItems(9)
  }, [selectedCategoryId])

  return (
    <>
      <div className='item-grid'>
        {items && items?.length > 0 ? (
          items.slice(0, visibleItems).map((item, index) => <Item key={index} food={item} />)
        ) : (
          <NotFound searchTerm={searchTerm} categoryName={categoryName} message='was not found in the Drink category' />
        )}
      </div>
      {items && visibleItems < items.length && (
        <div className='load-more'>
          <button onClick={loadMore}>+ Show More</button>
        </div>
      )}
    </>
  )
}

export default ItemGrid

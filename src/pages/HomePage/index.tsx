import SearchIcon from '@assets/images/food/search.png'
import LoadingAnimation from '@components/Loader'
import ScrollToTopButton from '@components/SrollToTop'
import Filter from '@features/Filter/components'
import ItemGrid from '@features/ListFood/ItemsGrid'
import Search from '@features/Search/components'
import useApi from '@hooks/useApi'
import { setSearchTerm } from '@stores/searchSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Category } from 'src/models/category'
import { Food } from 'src/models/food'
import './style.scss'

const HomePage: React.FC = () => {
  const { data: foodList, loading } = useApi<Food[]>('https://run.mocky.io/v3/a24cfec5-f76c-410b-a5ac-9f63fab28abb')
  const { data: categoriesList, loading: loadingCategory } = useApi<Category[]>(
    'https://run.mocky.io/v3/f25ced0a-9ff7-4996-bdc7-430f281c48db'
  )
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null)
  const [foods, setFoods] = useState<Food[] | null>([])
  const dispatch = useDispatch()

  console.log('foodList')

  /**
   * Handle search restaurant name by categoryId
   * @param searchTerm
   * @returns
   */
  const handleSearch = (searchTerm: string) => {
    if (!foodList) {
      return
    }

    dispatch(setSearchTerm(searchTerm))
    const foodsArray = foodList ?? []
    let filteredFoodList: Food[] | null = null

    if (searchTerm) {
      filteredFoodList = foodsArray.filter((food) => {
        const isNameMatch = food.name.toLowerCase().includes(searchTerm.toLowerCase())
        if (selectedCategoryId === null) {
          return isNameMatch
        }
        return isNameMatch && food.categoryId === selectedCategoryId
      })
    } else if (selectedCategoryId === null) {
      filteredFoodList = foodsArray
    } else {
      filteredFoodList = foodsArray.filter((food) => food.categoryId === selectedCategoryId)
    }

    setFoods(filteredFoodList)
  }

  useEffect(() => {
    if (!loading && foodList && foodList?.length > 0) {
      const filteredFoodList =
        foodList &&
        foodList?.filter((food) => (selectedCategoryId !== null ? food.categoryId === selectedCategoryId : true))

      setFoods(filteredFoodList)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, foodList?.length])

  return (
    <div className='home-page'>
      <div className='container'>
        <Search icon={SearchIcon} onSearch={handleSearch} selectedCategoryId={selectedCategoryId} />
      </div>
      <div className='container'>
        {!loadingCategory ? (
          <Filter
            items={categoriesList}
            onCategoryChange={setSelectedCategoryId}
            selectedCategoryId={selectedCategoryId}
          />
        ) : (
          <LoadingAnimation />
        )}
      </div>

      <div className='container'>
        {!loading ? <ItemGrid items={foods} selectedCategoryId={selectedCategoryId} /> : <LoadingAnimation />}
      </div>
      <ScrollToTopButton />
    </div>
  )
}

export default HomePage

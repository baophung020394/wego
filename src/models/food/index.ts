export interface Food {
  id: string
  index: number
  rating: number
  promotion: 'gift' | 'discount' | '1+1' | null
  isNew: boolean
  categoryId: string
  minCookTime: number
  maxCookTime: number
  restaurant: string
  name: string
  imageUrl: string
}

export interface FoodResponse {
  data: Food[] | undefined
}

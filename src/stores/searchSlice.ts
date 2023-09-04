import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchTerm: '',
    categoryName: ''
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    setCategoryName: (state, action) => {
      state.categoryName = action.payload
    }
  }
})

export const { setSearchTerm, setCategoryName } = searchSlice.actions
export default searchSlice.reducer

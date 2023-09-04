import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const LazyHomePage = lazy(() => import('@pages/HomePage/'))
const LazyPageTest = lazy(() => import('@pages/PageSample/'))

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/home' element={<LazyHomePage />} />
      <Route path='/pagetest' element={<LazyPageTest />} />
      <Route path='*' element={<LazyHomePage />} />
    </Routes>
  )
}

export default AppRoutes

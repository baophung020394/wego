// App.tsx

import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './router/routes'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  )
}

export default App

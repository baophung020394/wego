import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import { Box } from '@mui/material'
import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <main className='main-content'>{children}</main>
      <Footer />
    </Box>
  )
}

export default Layout

import React, { useState, useEffect } from 'react'
import ScrollToTopIcon from '@assets/images/food/component_scroll.svg'
import './ScrollToTopButton.scss'
import ImageCustom from '@components/Image'

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <button className={`scroll-to-top-button ${showButton ? 'show' : ''}`} onClick={scrollToTop}>
      <ImageCustom src={ScrollToTopIcon} alt='' />
    </button>
  )
}

export default ScrollToTopButton

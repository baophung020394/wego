import ChallangeIcon from '@assets/images/logo/icon_challange.svg'
import CloseIcon from '@assets/images/logo/icon_close.svg'
import InfoIcon from '@assets/images/logo/icon_info.svg'
import MemoIcon from '@assets/images/logo/icon_memo.svg'
import MenuIcon from '@assets/images/logo/icon_menu.svg'
import Logo from '@assets/images/logo/logo.svg'
import CustomButton from '@components/Button'
import ImageCustom from '@components/Image'
import { AppBar, Box, Container, Grid, Toolbar } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate, useResolvedPath } from 'react-router-dom'
import './navbar.scss'

const Navbar: React.FC = () => {
  const [isOpenSubmenu, setIsOpenSubmenu] = useState<boolean>(false)
  const navigate = useNavigate()
  const submenuRef = useRef<HTMLLIElement>(null)
  const location = useLocation()
  const isTopPage = useResolvedPath('/tops').pathname
  const isMyrecord = useResolvedPath('/myrecords').pathname
  const isMycolumn = useResolvedPath('/columns').pathname

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target as Node)) {
        setIsOpenSubmenu(false) // Đóng submenu nếu bấm ngoài phần tử submenu
      }
    }

    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  return (
    <>
      <AppBar position='sticky' className='navbar'>
        <Container>
          <Toolbar>
            <Grid container alignItems='center' className='navbar-top'>
              <Box className='navbar-top__logo' onClick={() => navigate('/tops')}>
                <ImageCustom src={Logo} alt='logo' />
              </Box>
              <Box className='navbar-top__menu'>
                <Box className='navbar-top__items'>
                  <ul className='navbar-items'>
                    <li
                      className={`navbar-items__item ${
                        isTopPage === location.pathname ? 'navbar-items__item--active' : ''
                      }`}
                    >
                      <CustomButton
                        text='自分の記録'
                        backgroundColor='transparent'
                        backgroundColorHover='transparent'
                        boxShadow='none'
                        icon={MemoIcon}
                        className='navbar-items__button'
                        onClick={() => navigate('/myrecords')}
                      />
                    </li>
                    <li
                      className={`navbar-items__item ${
                        isMyrecord === location.pathname ? 'navbar-items__item--active' : ''
                      }`}
                    >
                      <CustomButton
                        text='チャレンジ'
                        backgroundColor='transparent'
                        backgroundColorHover='transparent'
                        boxShadow='none'
                        icon={ChallangeIcon}
                        className='navbar-items__button'
                        onClick={() => navigate('/tops')}
                      />
                    </li>
                    <li
                      className={`navbar-items__item navbar-items__item--info ${
                        isMycolumn === location.pathname ? 'navbar-items__item--active' : ''
                      }`}
                    >
                      <CustomButton
                        text='お知らせ'
                        backgroundColor='transparent'
                        backgroundColorHover='transparent'
                        boxShadow='none'
                        icon={InfoIcon}
                        className='navbar-items__button'
                        onClick={() => navigate('/columns')}
                      />
                      <span className='number'>1</span>
                    </li>
                    <li className='navbar-items__item navbar-items__item--ml' ref={submenuRef}>
                      {isOpenSubmenu ? (
                        <CustomButton
                          text=''
                          backgroundColor='transparent'
                          backgroundColorHover='transparent'
                          boxShadow='none'
                          icon={CloseIcon}
                          className='navbar-items__button'
                          onClick={() => setIsOpenSubmenu(false)}
                        />
                      ) : (
                        <CustomButton
                          text=''
                          backgroundColor='transparent'
                          backgroundColorHover='transparent'
                          boxShadow='none'
                          icon={MenuIcon}
                          className='navbar-items__button'
                          onClick={() => setIsOpenSubmenu(true)}
                        />
                      )}

                      {isOpenSubmenu ? (
                        <Box className='navbar-items__submenu'>
                          <ul className='submenu__items'>
                            <li className='submenu__item'>
                              <button onClick={() => navigate('/myrecords')}>自分の記録</button>
                            </li>
                            <li className='submenu__item'>
                              <button>体重グラフ</button>
                            </li>
                            <li className='submenu__item'>
                              <button>目標</button>
                            </li>
                            <li className='submenu__item'>
                              <button>選択中のコース</button>
                            </li>
                            <li className='submenu__item'>
                              <button
                                onClick={() => {
                                  navigate('/columns')
                                }}
                              >
                                コラム一覧
                              </button>
                            </li>
                            <li className='submenu__item'>
                              <button>設定</button>
                            </li>
                          </ul>
                        </Box>
                      ) : null}
                    </li>
                  </ul>
                </Box>
              </Box>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
      <Box className='navbar-top__menu mobile'>
        <Box className='navbar-top__items'>
          <ul className='navbar-items'>
            <li className='navbar-items__item '>
              <CustomButton
                text='自分の記録'
                backgroundColor='transparent'
                backgroundColorHover='transparent'
                boxShadow='none'
                icon={MemoIcon}
                className='navbar-items__button'
                onClick={() => navigate('/tops')}
              />
            </li>
            <li className='navbar-items__item'>
              <CustomButton
                text='チャレンジ'
                backgroundColor='transparent'
                backgroundColorHover='transparent'
                boxShadow='none'
                icon={ChallangeIcon}
                className='navbar-items__button'
                onClick={() => navigate('/myrecords')}
              />
            </li>
            <li className='navbar-items__item navbar-items__item--info'>
              <CustomButton
                text='お知らせ'
                backgroundColor='transparent'
                backgroundColorHover='transparent'
                boxShadow='none'
                icon={InfoIcon}
                className='navbar-items__button'
                onClick={() => navigate('/columns')}
              />
              <span className='number'>1</span>
            </li>
          </ul>
        </Box>
      </Box>
    </>
  )
}

export default Navbar

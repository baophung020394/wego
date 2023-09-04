import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import './footer.scss'
const Footer: React.FC = () => {
  return (
    <Box className='footer'>
      <ul className='footer__items'>
        <li className='footer__item'>
          <Link to='/'>会員登録</Link>
        </li>
        <li className='footer__item'>
          <Link to='/'>運営会社</Link>
        </li>
        <li className='footer__item'>
          <Link to='/'>利用規約</Link>
        </li>
        <li className='footer__item'>
          <Link to='/'>個人情報の取扱について</Link>
        </li>
        <li className='footer__item'>
          <Link to='/'>特定商取引法に基づく表記</Link>
        </li>
        <li className='footer__item'>
          <Link to='/'>お問い合わせ</Link>
        </li>
      </ul>
    </Box>
  )
}

export default Footer

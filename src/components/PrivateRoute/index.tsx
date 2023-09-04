import { Navigate, useLocation } from 'react-router-dom'

interface PrivateRouteProps {
  element: React.ReactElement // element thay cho component
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const isAuthenticated = localStorage.getItem('token')
  const location = useLocation()

  return isAuthenticated ? element : <Navigate to='/login' state={{ from: location }} replace />
}

export default PrivateRoute

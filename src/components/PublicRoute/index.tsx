import { Navigate, useLocation } from 'react-router-dom'

interface PublicRouteProps {
  element: React.ReactElement
}

const PublicRoute: React.FC<PublicRouteProps> = ({ element }) => {
  const isAuthenticated = localStorage.getItem('token')
  const location = useLocation()
  console.log(isAuthenticated)
  return !isAuthenticated ? element : <Navigate to='/tops' state={{ from: location }} replace />
}

export default PublicRoute

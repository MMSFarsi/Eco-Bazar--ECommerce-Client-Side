
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './provider/AuthProvider'
import LoadingSpinner from './Components/Utils/LoadingSpinner'


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return  <LoadingSpinner></LoadingSpinner>
    }
    if(user && user?.email ){
        return children
    }
  return <Navigate to={'/login'}></Navigate>
}

export default PrivateRoute
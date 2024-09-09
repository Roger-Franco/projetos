/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { UserContext } from '../../UserContext'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({children}) {
  const {login} = useContext(UserContext)
  console.log(login, 'login')

  // if(login === true) {
  //   return children
  // } else if (login === false) {
  //   return <Navigate to="/login" />
  // } else {
  //   return <></>
  // }

  if(login === null) return null
  return login ? children : <Navigate to="/login" />
}

export default ProtectedRoute
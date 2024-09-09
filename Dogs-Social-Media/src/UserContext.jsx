/* eslint-disable react/prop-types */
import {createContext, useState, useEffect, useCallback} from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api'
import {useNavigate} from 'react-router-dom'

export const UserContext = createContext()
export function UserStorage({children}) {
  const [data, setData] = useState(null)
  const [login, setLogin] = useState(null)
  // const [login, setLogin] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const userLogout = useCallback(
    async function() {
      setData(null)
      setLogin(false)
      setError(null)
      setLoading(false)
      window.localStorage.removeItem('token')
    }, [])

  
  async function getUser(token) {
    const {url, options} = USER_GET(token)
    const response = await fetch(url, options)
    const json = await response.json()
    setData(json)
    setLogin(true)
    // console.log(json, 'json getUser UserContext')
  }

  async function userLogin(username, password) {
    try {
      setError(null)
      setLoading(true)
      const {url, options} = TOKEN_POST({username, password})
      const response = await fetch(url, options)
      console.log(response, 'response userLogin UserContext')
      if(!response.ok) throw new Error(`Error: Usuário inválido ${response.statusText}`)
      const json = await response.json()
      window.localStorage.setItem('token', json.token)
      await getUser(json.token)
      navigate('/conta')
    } catch (error) {
      setError(error.message)
      setLogin(false)
    } finally {
      setLoading(false)
    }
    // console.log(json, 'json userLogin UserContext')
  }

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token')
      if(token) {
        try {
          setError(null)
          setLoading(true)
          const {url, options} = TOKEN_VALIDATE_POST(token)
          const response = await fetch(url, options)
          if(!response.ok) throw new Error('Token inválido')
          // console.log(response, 'response autoLogin UserContext')
          // const json = await response.json()
          // console.log(json, 'json autoLogin UserContext')
          await getUser(token)
          // navigate('/conta')
          
        } catch (error) {
          console.log('Error: ', error)
          userLogout()
          // setError(error.message)
        } finally {
          setLoading(false)
        }
      } else {
        setLogin(false)
      }
      // setLoading(false)
    }
    autoLogin()
  }, [userLogout])


  return (
    <UserContext.Provider value={{userLogin, userLogout, data, error, loading, login}}>
      {children}
    </UserContext.Provider>
  )
}


import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function UserHeader() {
  const [title, setTitle] = useState('Feed')
  const location = useLocation()
  // console.log(location, 'location')
  useEffect(() => {
    switch(location.pathname) {
      case '/conta/estatisticas':
        setTitle('Estatísticas')
        break
      case '/conta/postar':
        setTitle('Poste Sua Foto')
        break
      default:
        setTitle('Minha Conta')
        break
    }
  }, [location])
  
  return (
    <header className={styles.header}>
    <h1 className="title">{title}</h1>
    <UserHeaderNav />
    </header>
  )
}

export default UserHeader
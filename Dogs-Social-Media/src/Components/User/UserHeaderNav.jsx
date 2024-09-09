import {NavLink} from 'react-router-dom'
import { UserContext } from '../../UserContext'
import { useContext, useState, useEffect } from 'react'
// import {ReactComponent as MinhasFotos} from '../../Assets/feed.svg'
import ReactFotos from '../../Assets/feed.svg?react'
import ReactStats from '../../Assets/estatisticas.svg?react'
import ReactAdicionar from '../../Assets/adicionar.svg?react'
import ReactSair from '../../Assets/sair.svg?react'
// import ReactLogo from './assets/react.svg?react'
import styles from './UserHeaderNav.module.css'
import { useNavigate, useLocation } from 'react-router-dom'
import useMedia from '../../Hooks/useMedia'


function UserHeaderNav() {
  const {userLogout} = useContext(UserContext)
  const navigate = useNavigate()
  const mobile = useMedia('(max-width: 40rem)')
  const [mobileMenu, setMobileMenu] = useState(false)

  const {pathname} = useLocation()
  useEffect(() => {
    setMobileMenu(false)
  }, [pathname])


  function handleLogout() {
    userLogout()
    navigate('/login')
  }
  return (
    <>
    {mobile && (
      <button className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} aria-label="menu" onClick={() => setMobileMenu(!mobileMenu)}></button>
    )}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="/conta" end><ReactFotos />{mobile && 'Minhas Fotos'}</NavLink>
        <NavLink to="/conta/estatisticas"><ReactStats />{mobile && 'Estatísticas'}</NavLink>
        <NavLink to="/conta/postar"><ReactAdicionar />{mobile && 'Adicionar Foto'}</NavLink>
        <button onClick={handleLogout}><ReactSair />{mobile && 'Sair'}</button>
      </nav>
    </>
  )
}

export default UserHeaderNav
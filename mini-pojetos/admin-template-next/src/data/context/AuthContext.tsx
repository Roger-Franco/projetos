import { createContext, useEffect, useState } from 'react'
import firebase from '../../firebase/config'
import Usuario from '../../model/Usuario'
import route from 'next/router'
import Cookies from 'js-cookie'

interface AuthContextProps {
  usuario?: Usuario
  carregando?: boolean
  loginGoogle?: () => Promise<void>
  cadastrar?: (email: string, senha: string) => Promise<void>
  login?: (email: string, senha: string) => Promise<void>
  logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario> {
  const token = await usuarioFirebase.getIdToken()
  return {
    uid: usuarioFirebase.uid,
    nome: usuarioFirebase.displayName,
    email: usuarioFirebase.email,
    token,
    provedor: usuarioFirebase.providerData[0].providerId,
    imagemUrl: usuarioFirebase.photoURL,
  }
}

function gerenciarCookie(logado: boolean) {
  if(logado){
    Cookies.set('admin-template-frank-auth', logado, {
      expires: 7 // dias
    })
  } else {
    Cookies.remove('admin-template-frank-auth')
  }
}

export function AuthProvider(props) {
  const [carregando, setCarregando] = useState(true)
  const [usuario, setUsuario] = useState<Usuario>(null)

  async function configurarSessao(usuarioFaribase) {
    if(usuarioFaribase?.email) {
      const usuario = await usuarioNormalizado(usuarioFaribase)
      setUsuario(usuario)
      gerenciarCookie(true)
      setCarregando(false)
      return usuario.email
    } else {
      setUsuario(null)
      gerenciarCookie(false)
      setCarregando(false)
      return false
    }
  }

  async function login(email, senha){
      try {
        setCarregando(true)
        const resp = await firebase.auth().signInWithEmailAndPassword(email, senha)
    
        await configurarSessao(resp.user)
          route.push('/')
      } finally {
        setCarregando(false)
      }
  }

  async function cadastrar(email, senha){
      try {
        setCarregando(true)
        const resp = await firebase.auth().createUserWithEmailAndPassword(email, senha)
    
        await configurarSessao(resp.user)
          route.push('/')
      } finally {
        setCarregando(false)
      }
  }

  async function loginGoogle(){
      try {
        setCarregando(true)
        const resp = await firebase.auth().signInWithPopup(
          new firebase.auth.GoogleAuthProvider()
        )
    
        await configurarSessao(resp.user)
          route.push('/')
      } finally {
        setCarregando(false)
      }
  }

  async function logout() {
    try {
      setCarregando(true)
      await firebase.auth().signOut()
      await configurarSessao(null)
    } finally {
      setCarregando(false)
    }
  }

  useEffect(() => {
    if(Cookies.get('admin-template-frank-auth')) {
    const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)
    return () => cancelar() // cancela o observer setado na linha acima
  } else {
    setCarregando(false)
  }
  }, [])

  return (
    <AuthContext.Provider value={{
      usuario,
      loginGoogle,
      login,
      cadastrar,
      logout,
      carregando
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
import { createContext, useEffect, useState } from 'react';

type Tema = 'dark' | ''

interface AppContextProps {
  tema?: string
  // tema?: Tema
  alternarTema?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props) {
  // const [tema, setTema] = useState<Tema>('dark')
  const [tema, setTema] = useState('dark')

  function alternarTema() {
    const novoTema = tema === '' ? 'dark' : ''
    setTema(novoTema)
    localStorage.setItem('tema', novoTema)
    // console.log(tema, 'tema')
  }

  useEffect(() => {
    const temaSalvo = localStorage.getItem('tema')
    setTema(temaSalvo)
  }, [])
  return (
    <AppContext.Provider value={{
      tema,
      alternarTema
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext
// export const AppConsumer = AppContext.Consumer
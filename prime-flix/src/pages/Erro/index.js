import React from 'react'
import { Link } from 'react-router-dom'
import './erro.css'

export const Erro = () => {
  return (
    <div className='not-found'>
      <h1>404</h1>
      <h2>Página nã encontrada!</h2>
      <Link to='/'>Veja todos os filmes!</Link>
    </div>

  )
}

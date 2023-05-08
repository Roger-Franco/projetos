import React, { useEffect, useState } from 'react'
import './favoritos.css'
import { Link } from 'react-router-dom'
import {toast} from 'react-toastify'

export const Favoritos = () => {
  const [filmesFavoritos, setFilmesFavoritos] = useState([])
  useEffect(() => {
    // setFilmesFavoritos(JSON.parse(localStorage.getItem('@primeflix')) || [])

    const minhaLista = localStorage.getItem('@primeflix')
    setFilmesFavoritos(JSON.parse(minhaLista) || [])

  },[])

  function excluirFilme(id) {
    const filtroFilmes = filmesFavoritos.filter((item) => item.id !== id)
    setFilmesFavoritos(filtroFilmes)
    localStorage.setItem('@primeflix', JSON.stringify(filtroFilmes))
    toast.success("Filme removido com sucesso!")
  }


  // console.log(filmesFavoritos, 'filmesFavoritos');
  return (
    <div className='meus-filmes'>
      <h1>Meus Filmes</h1>
      {filmesFavoritos.length === 0 && <span>Você não possui nenhum filme no momento :( </span>}
      <ul>
        {filmesFavoritos.map((item) => {
          return(
            <li key={item.id}>
              <span>{item.title}</span>
              <div>
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                <button onClick={() => excluirFilme(item.id)}>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
      
    </div>
  )
}

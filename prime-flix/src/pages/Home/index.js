import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import './home.css'

// URL da API /movie/now_playing?api_key=01cda55d31c247241e1128fa3d8a5f97&language=pt-br

export const Home = () => {
  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    async function loadFilmes() {
      const response = await api.get('/movie/now_playing', {
        params: {
          api_key: '01cda55d31c247241e1128fa3d8a5f97',
          language: 'pt-BR',
          page: 1
        }
      })
      // slice limita a quantidade de filmes
      setFilmes(response.data.results.slice(0,10))
      // console.log(response.data.results);
      setLoading(false)
    }
    
    loadFilmes()
  }, [])
  return (
    <div className="container">
      {loading ? <h2 className='loading'>Carregando filmes...</h2> 
    :
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return(
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
    }
    </div>
  )
}

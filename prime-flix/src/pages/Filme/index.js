import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../services/api'
import './filme.css'
import {toast} from 'react-toastify'

export default function Filme() {
  const [filme, setFilme] = useState({})
  const [loading, setLoading] = useState(true)
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function loadFilme() {
      await api.get(`/movie/${id}`, {
          params: {
            api_key: '01cda55d31c247241e1128fa3d8a5f97',
            language: 'pt-BR',
            page: 1
          }
        })
        .then((resp) => {
          console.log(resp.data);
          setFilme(resp.data)
          setLoading(false)
        })
        .catch(() => {
          console.log('Filme não encontrado');
          navigate('/', {replace: true})
          return;
        })
        
      // try {
      //   const response = await api.get(`/movie/${id}`, {
      //     params: {
      //       api_key: '01cda55d31c247241e1128fa3d8a5f97',
      //       language: 'pt-BR',
      //       page: 1
      //     }
      //   })
      //   console.log(response.data);
      //   setFilme(response.data)
        
      // } catch (error) {
      //   console.log('Filme não encontrado', error);
      // }
      // slice limita a quantidade de filmes
      // console.log(response.data.results);
    }
    loadFilme()

    return () => {
      console.log('COMPONENTE FOI DESMONTADO');
    }
  }, [navigate, id])

  function salvarFilme() {
    const minhaLista = localStorage.getItem('@primeflix')
    let filmesSalvos = JSON.parse(minhaLista) || [];
    const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id)

    if(hasFilme) {
      // alert('ESSE FILME JÁ ESTA NA LISTA')
      toast.warn('Esse filme já está na sua lista!')
      return;
    }

    filmesSalvos.push(filme)
    localStorage.setItem('@primeflix', JSON.stringify(filmesSalvos));
    // alert('FILME SALVO COM SUCESSO')
    toast.success('Filme salvo com sucesso!')
  }

  if(loading) {
    return (
      <div className='filme-info'>
        <h1>Carregando detalhes...</h1>
      </div>
    )
  }

  return (
    <div className='filme-info'>
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average}/10</strong>
      <div className="area-buttons">
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a target="blank" rel="external" href={`https://www.youtube.com/results?search_query=${filme.title} Trailer`}>
            Trailer
          </a>
        </button>
      </div>
    </div>
  )
}

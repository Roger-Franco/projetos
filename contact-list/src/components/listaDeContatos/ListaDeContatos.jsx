import './ListaDeContatos.css'
import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faTrash, faPlus, faTrashAlt, faUser, faPhone } from '@fortawesome/free-solid-svg-icons'

export const ListaDeContatos = () => {
  const [contato, setContato] = useState({id: '', nome: '', fone: ''})
  const [listaContato, setListaContato] = useState([])
  const inputFocusRefNome = useRef()
  const inputFocusRefFone = useRef()

  const adicionarLista = () => {
    // setContato(...contato, {id: Math.random()})
    // verificar se esta vazio
    if (contato.nome === '' || contato.fone === '') return

    // verificar duplicidade de contato
    const duplicidade = listaContato.find((item) => item.nome === contato.nome && item.fone === contato.fone)

    // if (duplicidade) return
    if (typeof duplicidade !== 'undefined') {
      inputFocusRefFone.current.focus()
      return
    } 
    
    setListaContato([...listaContato, {...contato, id: Math.random()}])
    setContato({nome: '', fone: ''})
    inputFocusRefNome.current.focus()
  }

  // persistência do state:
  // carregar a lista de contatos do localStorage
    useEffect(() => {
      if(localStorage.getItem('meus_contatos') !== null) {
        setListaContato(JSON.parse(localStorage.getItem('meus_contatos')));
      }
    }, [])

  // atualizar a lista de contatos no localStorage
  useEffect(() => {
    localStorage.setItem('meus_contatos', JSON.stringify(listaContato));
  }, [listaContato])

  
  function enterAdicionarContato(event) {
    if(event.code === "Enter") {
      adicionarLista()
    }
    // console.log(event.code)
  }

  function deletarLista() {
    setListaContato([])
    // localStorage.removeItem('meus_contatos')
  }
  
  function deletarContato(id) {
    setListaContato(listaContato.filter((item) => item.id !== id))
  }


  return (
    <div className='mx-2'>
      <div className="container-fluid titulo">
      <div className="row">
        <div className="col text-cente">
      <h4 className='text-center'> <FontAwesomeIcon icon={faList} className='me-2' />MINHA LISTA DE CONTATOS</h4>
        </div>
      </div>
    </div>
      <div className="container-fluid formulario">
        <div className="row">
          <div className="col p-3">
            <div className="row justify-content-center">
              <div className="col-10 col-sm-8 cl-md-6 col-lg-4">
                <div className='mb-3'>
                  <label className='form-label'>Nome:</label><br />
                  <input className='form-control' ref={inputFocusRefNome} type="text" onChange={(e) => setContato({...contato, nome: e.target.value})} value={contato.nome} />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Telefone:</label><br />
                  <input className='form-control' ref={inputFocusRefFone} type="text" onChange={(e) => setContato({...contato, fone: e.target.value})} onKeyUp={enterAdicionarContato} value={contato.fone} />
                </div>
                <div className="row mt-3">
                  <div className="col text-start">
                    <button className='btn btn-danger' onClick={deletarLista}>
                    <FontAwesomeIcon icon={faTrash} className='me-2' />
                      Deletar Contatos
                      </button>
                  </div>
                  <div className="col text-end">
                    <button className='btn btn-primary' onClick={adicionarLista}>
                    <FontAwesomeIcon icon={faPlus} className='me-2' />
                    Adicionar Contato</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* render lista de contatos */}
      {listaContato.map((item, index) => (

<div className="container componente-contato my-4">
      <div className="row">
        <div className="col p-2"><h5><FontAwesomeIcon className='me-3' icon={faUser} />Nome: {item.nome}</h5></div>
        <div className="col p-2"><h5><FontAwesomeIcon className='me-3' icon={faPhone} />Fone: {item.fone}</h5></div>
        <div className="col p-2 text-end">
        <h5><FontAwesomeIcon className='me-3' icon={faTrashAlt} onClick={() => deletarContato(item.id)} /></h5>
          </div>
      </div>
    </div>
        ))}
    </div>
  )
}

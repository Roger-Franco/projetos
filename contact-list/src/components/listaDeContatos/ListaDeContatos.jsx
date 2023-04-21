import React, { useEffect, useRef, useState } from 'react'

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
    <div>
      <h1>Minha lista de contatos</h1>
      <hr />
      <div>
        <label>Nome:</label><br />
        <input ref={inputFocusRefNome} type="text" onChange={(e) => setContato({...contato, nome: e.target.value})} value={contato.nome} />
      </div>
      <div>
        <label>Telefone:</label><br />
        <input  ref={inputFocusRefFone} type="text" onChange={(e) => setContato({...contato, fone: e.target.value})} onKeyUp={enterAdicionarContato} value={contato.fone} />
      </div>
      <button onClick={adicionarLista}>Adicionar Contato</button>
      <button onClick={deletarLista}>Deletar Contatos</button>
      <hr />
      {/* render lista de contatos */}
      {listaContato.map((item, index) => (
      <div key={index}>
        Nome: {item.nome} - Fone: {item.fone}
        <button onClick={() => deletarContato(item.id)}>Deletar contato</button> 
        </div>
        ))}
    </div>
  )
}

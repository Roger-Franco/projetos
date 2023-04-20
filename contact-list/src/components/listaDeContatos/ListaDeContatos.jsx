import React, { useRef, useState } from 'react'

export const ListaDeContatos = () => {
  const [contato, setContato] = useState({nome: '', fone: ''})
  const [listaContato, setListaContato] = useState([])
  const inputFocusRefNome = useRef()
  const inputFocusRefFone = useRef()

  const adicionarLista = () => {
    // verificar se esta vazio
    if (contato.nome === '' || contato.fone === '') return

    // verificar duplicidade de contato
    const duplicidade = listaContato.find((item) => item.nome === contato.nome && item.fone === contato.fone)

    // if (duplicidade) return
    if (typeof duplicidade !== 'undefined') {
      inputFocusRefFone.current.focus()
      return
    } 
    
    setListaContato([...listaContato, contato])
    setContato({nome: '', fone: ''})
    inputFocusRefNome.current.focus()
  }
  
  function enterAdicionarContato(event) {
    if(event.code === "Enter") {
      adicionarLista()
    }
    // console.log(event.code)
  }
  // console.log(contato);
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
      <hr />
      {/* render lista de contatos */}
      {listaContato.map((item, index) => <div key={index}>Nome: {item.nome} - Fone: {item.fone}</div>)}
    </div>
  )
}

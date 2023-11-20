import { useEffect, useState } from 'react'
import Cliente from '../core/Cliente'
import ColecaoCliente from '../backend/db/ColecaoCliente'
import ClienteRepositorio from '../core/ClienteRepositorio'
import useTabelaOuForm from './useTabelaOuForm'

export default function useClientes() {
  const repo : ClienteRepositorio = new ColecaoCliente()
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])

  const {tabelaVisivel, exibirTabela, exibirFormulario} = useTabelaOuForm()

  useEffect(obterTodos, [])
  
  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      // setVisivel('tabela')
      exibirTabela()
    })

  }


  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente)
    // setVisivel('form')
    exibirFormulario()
  }
  
  async function excluirCliente(cliente: Cliente) {
    await repo.excluir(cliente)
    obterTodos()
  }
  
    function novoCliente() {
      setCliente(Cliente.vazio())
      // setVisivel('form')
      exibirFormulario()
    }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos()
  }

  return {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos,
    tabelaVisivel,
    exibirTabela,
  }
}
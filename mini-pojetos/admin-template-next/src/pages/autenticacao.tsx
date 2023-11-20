import React, { useState } from 'react'
import AuthInput from '../components/auth/AuthInput'
import { IconeAtencao } from '../components/icons'
import useAuth from '../data/hook/useAuth'

export default function Autenticacao() {

  const {login, cadastrar, loginGoogle} = useAuth()

  const [erro, setErro] = useState(null)
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [modo, setModo] = useState<'login' | 'cadastro'>('login')

  function exibirErro(msg, tempoEmSegundos = 5) {
    setErro(msg)
    setTimeout(() => setErro(null), tempoEmSegundos * 1000)
  }

  async function submeter() {
    try {
      if(modo === 'login') {
        console.log('login')
        // exibirErro('Ocorreu um erro no Login!')
        await login(email, senha)
      } else {
        console.log('cadastrar')
        await cadastrar(email, senha)
        // exibirErro('Ocorreu um erro no Cadastro!')

      }
    } catch (error) {
      // let message
      // if(error instanceof Error) message = error.message
      // else message = String(error)
      // exibirErro(message)
      // console.log(e)
      // exibirErro(e.message.error)
      // exibirErro(error?.message ?? 'Erro desconhecido!')
      exibirErro('Erro ao tentar logar!')
    }
  }

  return (
    <div className='flex flex-col h-screen items-center justify-center'>
      <div className='w-1/2'>
        <h1 className={`
          text-xl font-bold mb-5
        `}>
          {modo == 'login' ? 'Entre com a Sua Conta' : 'Cadastre-se na Plataforma'}
        </h1>
        {erro ? (
          <div className={`
          flex items-center
            bg-red-400 text-white py-3 px-5 my-2
            border border-red-700 rounded-lg
          `}>
            {IconeAtencao()}
            <span className='ml-3'>{erro}</span>
          </div>
        ) : (
          false
        )}

        <AuthInput
        label='Email'
        tipo='email'
        valor={email}
        valorMudou={setEmail}
        obrigatorio
        />
        <AuthInput
        label='Senha'
        tipo='password'
        valor={senha}
        valorMudou={setSenha}
        obrigatorio
        />

        <button onClick={submeter} className={`
          w-full bg-indigo-500 hover:bg-indigo-400
          text-white rounded-lg px-4 py-3 mt-6
        `}>
        {modo == 'login' ? 'Entrar' : 'Cadastrar'}
        </button>
        <hr className='my-6 border-gray-300 w-full' />
        <button onClick={loginGoogle} className={`
          w-full bg-red-500 hover:bg-red-400
          text-white rounded-lg px-4 py-3
        `}>
        Entrar com Google
        </button>

        {modo === 'login' ? (
                    <p className="mt-8">
                        Novo por aqui?
                        <a onClick={() => setModo('cadastro')} className={`
                            text-blue-500 hover:text-blue-700 font-semibold
                            cursor-pointer
                        `}> Crie um Conta Gratuitamente</a>
                    </p>
                ) : (
                    <p className="mt-8">
                        Já faz parte da nossa comunidade?
                        <a onClick={() => setModo('login')} className={`
                            text-blue-500 hover:text-blue-700 font-semibold
                            cursor-pointer
                        `}> Entre com a suas Credenciais</a>
                    </p>
                )}
      </div>
    </div>
  )
}

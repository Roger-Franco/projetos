import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import { PASSWORD_RESET } from '../../api'
import Error from '../Helper/Error'
import Head from '../Helper/Head'

function LoginPasswordReset() {
  const [login, setLogin] = useState('')
  const [key, setKey] = useState('')
  const password = useForm()
  const {error, loading, request} = useFetch()
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    // console.log(window.location.search, 'window.location.search');
    // console.log(params, 'params');
    setLogin(params.get('login'))
    setKey(params.get('key'))
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()

    if(password.validate()) {
        const {url, options} = PASSWORD_RESET({
          login,
          key,
          password: password.value
        })
        const {response} = await request(url, options)
        if(response.ok) navigate('/login')
      }
  }
  
  return (
    <section className="animeLeft">
      <Head title='Resete a senha' />
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova Senha" type="password" name="password" {...password} />
        {loading ? <Button disabled>Resetando...</Button> : <Button>Resetar</Button>}
        <Error error={error} />
      </form>
    </section>
  )
}

export default LoginPasswordReset
import Input from "../Forms/Input"
import Button from "../Forms/Button"
import Error from "../Helper/Error"
import useForm from "../../Hooks/useForm"
import { USER_POST } from '../../api'
import { useContext } from 'react'
import {UserContext} from '../../UserContext'
import useFetch from '../../Hooks/useFetch'
import Head from '../Helper/Head'

function LoginCreate() {
  const username = useForm()
  const email = useForm('email')
  const password = useForm()

  const {userLogin} = useContext(UserContext)
  const {request, error, loading} = useFetch()

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(username, email, password, 'usernamepaswword')
    const {url, options} = USER_POST({username: username.value, email: email.value, password: password.value})
    // const response = await fetch(url, options)  
    const {response} = await request(url, options)  
    if(response.ok) {
    userLogin(username.value, password.value)
    }
    // console.log(response)
  }
  return (
    <section className="animeLeft">
      <Head title='Crie sua conta' />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  )
}

export default LoginCreate
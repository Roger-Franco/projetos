import { Link } from 'react-router-dom'
import {  useContext } from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm'
import { UserContext } from '../../UserContext'
import Error from '../Helper/Error'
import styles from './LoginForm.module.css'
import stylesBtn from '../Forms/Button.module.css'
import Head from '../Helper/Head'

function LoginForm() {
  const username = useForm();
  const password = useForm();

  const {userLogin, error, loading} = useContext(UserContext)

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }


  return (
    <section className="animeLeft">
      <Head title='Login' />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input 
          label="Usuário" 
          value={username} 
          type="text" 
          name="username" 
          // onChange={e => setUsername(e.target.value)} 
          {...username}
        />
        <Input
         label="Senha" 
         value={username} 
         type="password" 
         name="password" 
        //  onChange={e => setUsername(e.target.value)} 
         {...password}
        />
        {loading ? (
          <Button disabled>Carregando...</Button> 
        ) : (
            <Button>Entrar</Button>
        )}
        <Error error={error && 'Dados incorretos'} />
      </form>
      <Link className={styles.perdeu} to='/login/perdeu'>Perdeu a Senha?</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não pussui conta? Cadastre-se no site.</p>
      <Link className={stylesBtn.button} to='/login/criar'>Cadastro</Link>
      </div>
    </section>
  )
}

export default LoginForm
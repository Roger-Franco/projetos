import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm'
import { TOKEN_POST, USER_GET } from '../../api'
// import styles from './LoginForm.module.css'

function LoginForm() {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  const username = useForm();
  const password = useForm();

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      getUser(token)
    }
  }, [])
  // console.log('username', 'password')
  // console.log(username, password)
  // console.log('username', 'password')

  // const { userLogin, error, loading } = useContext(UserContext);

  async function getUser(token) {
    console.log(token, 'token')
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json, 'json-getUser')
    // const response = await fetch('https://dogsapi.origamid.dev/json/api/user', {
    //   method: 'GET',
    //   headers: {
    //     'Authorization': `Bearer ${token}`,
    //   },
    // })
    // const json = await response.json()
    // console.log(json, 'json-getUser')
  }
  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      const {url, options} = TOKEN_POST({username: username.value, password: password.value});
      // userLogin(username.value, password.value);
      // console.log(api, 'api')

      const response = await fetch(url, options);
      console.log(response, 'response1')
      const json = await response.json();
      console.log(json, 'json1')
      window.localStorage.setItem('token', json.token)
      getUser(json.token)
      return json

    }
  }

  // function handleSubmit(e) {
  //   e.preventDefault()

  // if (username.validate() && password.validate()) {
  //   const {url, options} = TOKEN_POST({username: username.value, password: password.value});
  //   // userLogin(username.value, password.value);
  //   // console.log(api, 'api')

  //   fetch(url, options)
  //       .then(response => {
  //         console.log(response, 'response')
  //         return response.json()
  //       }).then((json) => {
  //         console.log(json, 'json')
  //         return json
  //       })
  // }

  //   fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       username,
  //       password
  //     })
  //   })
  //   .then(response => {
  //     console.log(response, 'response')
  //     return response.json()
  //   }).then((json) => {
  //     console.log(json, 'json')
  //     return json
  //   })
  // }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
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
        <Button>Entrar</Button>
        {/* <input value={username} type="text" onChange={e => setUsername(e.target.value)} /> */}
        {/* <input value={password} type="text" onChange={({target}) => setPassword(target.value)} /> */}
        {/* <button>Entrar</button> */}
      </form>
      <Link to='/login/criar'>Cadastro</Link>
    </section>
  )
}

export default LoginForm
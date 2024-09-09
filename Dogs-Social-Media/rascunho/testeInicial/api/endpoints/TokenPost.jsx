import {useState} from 'react'

function TokenPost() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    console.log(username, password)
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password
      })
    }).then(response => {
      console.log(response, 'response')
      return response.json()
    }).then((json) => {
      console.log(json, 'json')
      setToken(json.token)
      return json
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="username" type="text" value={username} onChange={e => setUsername(e.target.value)} />
      <input placeholder="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button>Enviar</button>
      <p style={{wordBreak: 'break-all'}}>{token}</p>
    </form>
  )
}

export default TokenPost
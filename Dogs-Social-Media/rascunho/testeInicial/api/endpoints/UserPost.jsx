import {useState} from 'react'

function UserPost() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    console.log(username, email, password)
    fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    }).then(response => {
      console.log(response, 'response')
      return response.json()
    }).then((json) => {
      console.log(json, 'json')
      return json
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="username" type="text" value={username} onChange={e => setUsername(e.target.value)} />
      <input placeholder="email" type="text" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button>Enviar</button>
    </form>
  )
}

export default UserPost
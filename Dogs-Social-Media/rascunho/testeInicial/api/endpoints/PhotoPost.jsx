import {useState} from 'react'

function PhotoPost() {
  const [token, setToken] = useState('')
  const [nome, setNome] = useState('')
  const [peso, setPeso] = useState('')
  const [idade, setIdade] = useState('')
  const [img, setImg] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData()
    formData.append('img', img)
    formData.append('nome', nome)
    formData.append('peso', peso)
    formData.append('idade', idade)
    fetch('https://dogsapi.origamid.dev/json/api/photo', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
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
      <input placeholder="token" type="text" value={token} onChange={e => setToken(e.target.value)} />
      <input placeholder="nome" type="nome" value={nome} onChange={e => setNome(e.target.value)} />
      <input placeholder="peso" type="text" value={peso} onChange={e => setPeso(e.target.value)} />
      <input placeholder="idade" type="text" value={idade} onChange={e => setIdade(e.target.value)} />
      <input type="file" onChange={e => setImg(e.target.files[0])} />
      <button>Enviar</button>
    </form>
  )
}

export default PhotoPost
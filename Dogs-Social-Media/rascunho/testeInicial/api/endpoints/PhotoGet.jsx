import {useState} from 'react'

function PhotoGet() {
const [id, setId] = useState('')
  function handleSubmit(e) {
    e.preventDefault()

    fetch(`https://dogsapi.origamid.dev/json/api/photo/${id}`).then(resp => {
      console.log(resp)
      return resp.json()
    }).then(json => {
      console.log(json)
      return json
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button>Enviar</button>
    </form>
  )
}

export default PhotoGet
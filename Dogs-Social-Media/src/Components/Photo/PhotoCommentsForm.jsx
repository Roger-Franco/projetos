import { useState } from 'react'
import ReactEnviar from '../../Assets/enviar.svg?react'
import useFetch from '../../Hooks/useFetch'
import { COMMENT_POST } from '../../api'
import Error from '../Helper/Error'
import styles from './PhotoCommentsForm.module.css'

// eslint-disable-next-line react/prop-types
function PhotoCommentsForm({id, setComments, single}) {
  const [comment, setComment] = useState('')
  const {request, error} = useFetch()

  async function handleSubmit(event) {
    event.preventDefault()
    const {url, options} = COMMENT_POST(id, {comment})
    const {response, json } = await request(url, options)
    // console.log(json, 'json-comment')
    if(response.ok) {
      setComment('')
      setComments((comments) => [...comments, json])
    }
    // setComment('')
  }
  return (
    <form className={`{styles.form} ${single ? styles.single : ''}`} onSubmit={handleSubmit}>
      <textarea 
      className={styles.textarea}
      id="comment"
      name="comment"
      placeholder="Comente..."
      value={comment}
      onChange={({target}) => setComment(target.value)}
      />
      <button className={styles.button}><ReactEnviar /></button>
      <Error error={error} />
    </form>
  )
}

export default PhotoCommentsForm
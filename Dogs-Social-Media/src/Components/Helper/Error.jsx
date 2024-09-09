import {PropTypes} from 'prop-types'

function Error({error}) {
  if(!error) return null
  return (
    <p style={{color: '#f31', margin: '1rem 0'}}>{error}</p>
  )
}

// Error.defaultProps = {
//   error: 'null'
// }

Error.propTypes = {
  error: PropTypes.string,
}

export default Error
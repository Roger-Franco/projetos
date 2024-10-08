/* eslint-disable react/prop-types */
import styles from './Input.module.css'
function Input({ label, type, name, value, onChange, error, onBlur }) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input
       id={name} 
       name={name} 
       className={styles.input} 
       type={type}  
       value={value}
       onChange={onChange}
       onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

// Input.prototypes = {
//   setValue: func,
// }

export default Input
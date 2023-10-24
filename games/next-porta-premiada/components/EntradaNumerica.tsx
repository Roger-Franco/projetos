// import { useRouter } from 'next/router'
// import styles from '../styles/EntradaNumerica.module.css'

// interface EntradaNumericaProps {
//   text: string
//   value: number
//   onChange: (newValue: number) => void
//   comPresente: number
//   qtdePortas: number
// }

// export default function EntradaNumerica(props: EntradaNumericaProps) {
//   const router = useRouter()
//   const dec = () => {
    
//     if(props.value > 1) {
//       if(props.text === 'PortaComPresente' && props.comPresente <= props.qtdePortas) {
//         props.onChange(props.value - 1)
//        } else if (props.text === 'Qtde Portas' && props.comPresente < props.qtdePortas){
//         props.onChange(props.value - 1)
//      } else {
//         return
//       }
//     } else {
//       return
//     }
//   }
//   const inc = () => {
//     console.log(props.text)

//    if(props.text === 'PortaComPresente' && props.comPresente < props.qtdePortas) {
//      props.onChange(props.value + 1)
//     } else if (props.text === 'Qtde Portas' && props.comPresente <= props.qtdePortas){
//      props.onChange(props.value + 1)
//   } else {
//      return
//    }
//   }
    
//   return (
//     <div className={styles.entradaNumerica}>
//       <span className={styles.text}>{props.text}</span>
//       <span className={styles.value}>{props.value}</span>
//       <div className={styles.botoes}>
//         <button className={styles.btn} onClick={dec}>-</button>
//         <button className={styles.btn} onClick={inc}>+</button>
//       </div>
//     </div>
//   )
// }


// ======== Validação do professor

import { useRouter } from 'next/router'
import styles from '../styles/EntradaNumerica.module.css'

interface EntradaNumericaProps {
  text: string
  value: number
  onChange: (newValue: number) => void
}

export default function EntradaNumerica(props: EntradaNumericaProps) {
  const router = useRouter()
  const dec = () => props.onChange(props.value - 1)
  const inc = () => props.onChange(props.value + 1)
    
  return (
    <div className={styles.entradaNumerica}>
      <span className={styles.text}>{props.text}</span>
      <span className={styles.value}>{props.value}</span>
      <div className={styles.botoes}>
        <button className={styles.btn} onClick={dec}>-</button>
        <button className={styles.btn} onClick={inc}>+</button>
      </div>
    </div>
  )
}

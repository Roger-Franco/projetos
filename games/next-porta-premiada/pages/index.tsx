// import Link from 'next/link';
// import Cartao from '../components/Cartao';
// import styles from '../styles/Formulario.module.css';
// import EntradaNumerica from '../components/EntradaNumerica';
// import { useState } from 'react';

// export default function Formulario() {
//   const [ qtdePortas, setQtdePortas] = useState(3)
//   const [comPresente, setComPresente] = useState(1)

//   return (
//     <div className={styles.formulario}>
//       <div>
//       <Cartao bgcolor='#c0392c'>
//         <h1>Monty Hall</h1>
//       </Cartao>
//       <Cartao>
//         <EntradaNumerica comPresente={comPresente} qtdePortas={qtdePortas} value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)} text='Qtde Portas' />
//       </Cartao>
//       </div>
//       <div>
//       <Cartao>
//       <EntradaNumerica comPresente={comPresente} qtdePortas={qtdePortas} value={comPresente} onChange={novaPortaCompresente => setComPresente(novaPortaCompresente)} text='PortaComPresente' />
//       </Cartao>

//       <Cartao bgcolor='#28a085'>
//         <Link className={styles.link} href={`/jogo/${qtdePortas}/${comPresente}`}>
//           <h2 className={styles.link}>Iniciar</h2>
//         </Link>
//       </Cartao>
//       </div>
//     </div>
//   )
// }

// ======== validaçao do professor:

import Link from 'next/link';
import Cartao from '../components/Cartao';
import styles from '../styles/Formulario.module.css';
import EntradaNumerica from '../components/EntradaNumerica';
import { useState } from 'react';

export default function Formulario() {
  const [ qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={styles.formulario}>
      <div>
      <Cartao bgcolor='#c0392c'>
        <h1>Monty Hall</h1>
      </Cartao>
      <Cartao>
        <EntradaNumerica value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)} text='Qtde Portas' />
      </Cartao>
      </div>
      <div>
      <Cartao>
      <EntradaNumerica value={comPresente} onChange={novaPortaCompresente => setComPresente(novaPortaCompresente)} text='PortaComPresente' />
      </Cartao>

      <Cartao bgcolor='#28a085'>
        <Link className={styles.link} href={`/jogo/${qtdePortas}/${comPresente}`}>
          <h2 className={styles.link}>Iniciar</h2>
        </Link>
      </Cartao>
      </div>
    </div>
  )
}


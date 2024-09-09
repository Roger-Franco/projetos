import { useEffect, useState } from 'react'
import styles from './UserStatsGraphs.module.css'
import PropTypes from 'prop-types'
import {VictoryPie, VictoryChart, VictoryBar} from 'victory'

function UserStatsGraphs({data}) {
  const [graph, setGraph] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos)
      }
    })
    // console.log(data, 'data');
    // data.map(({acessos} => Number(acessos)))
    // const total = data.reduce((total, {acessos}) => {
    //   return total + acessos
    // }, 0)
    // setTotal(total)

    setTotal(data.map(({acessos}) => Number(acessos)).reduce((a,b) => a + b, 0))
    setGraph(graphData)
  }, [data])
  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={styles.graphItem}>
        <VictoryPie
          // data={[{x: 'Acessos!', y: 4}, {x: 'Acessos', y: 3}]}
          data={graph}
          innerRadius={50}
          padding={{top: 20, bottom: 20, left: 80, right: 80}}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2
            },
            labels: {
              fontSize: 14,
              fill: '#333'
            }
          }}
        />
      </div>
      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar
            data={graph}
            alignment="start"
          />
        </VictoryChart>
      </div>
    </section>
  )
}

UserStatsGraphs.propTypes = {
  data: PropTypes.array.isRequired
}

export default UserStatsGraphs
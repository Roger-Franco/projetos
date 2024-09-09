import React from 'react'
import Head from '../Helper/Head'
import useFetch from '../../Hooks/useFetch'
import { useEffect } from 'react'
import { GET_STATS } from '../../api'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
// import UserStatsGraphs from './UserStatsGraphs'
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'))
// o código acima ajuda na otimização da aplicação. Nesse caso precisa do Suspense envolvendo também como encontrado na linha 28

function UserStats() {
  const {data, error, loading, request} = useFetch()

  useEffect(() => {
    async function getData() {
      const {url, options} = GET_STATS()
      const {response, json} = await request(url, options)
    }
    getData()
  }, [request])

  if(loading) return <Loading />
  if(error) return <Error error={error} />

  if(data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    )

  else return null;
}

export default UserStats
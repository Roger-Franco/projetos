import axios from 'axios'

// Base da API https://api.themoviedb.org/3/
// URL da API /movie/now_playing?api_key=01cda55d31c247241e1128fa3d8a5f97&language=pt-br
// roger-franc roger885


const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
})

export default api;
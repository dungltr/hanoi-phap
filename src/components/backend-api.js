import axios from 'axios'

const AXIOS = axios.create({
  //baseURL: `http://localhost:8098/api`//,
  baseURL: `http://176.180.237.87:8098/api`//,
  //baseURL: `http://64.225.55.92:8098/api`//, Docker
  //baseURL: `http://207.154.240.138:8098/api`//, Spring
  //baseURL: `http://159.89.241.212:8098/api`//, WordPress // Floating IP
  //baseURL: `http://192.168.1.64:8098/api`//,
  //baseURL: `http://193.55.95.162:443/api`//,http://193.55.95.162/api
  //baseURL: `http://35.180.94.242:8098/api`
  //timeout: 100000
})

export default {
  response:[],
  test(){
    return "test"
  },
  hello () {
    return AXIOS.get(`/hello`)
  },
  getUser (userId) {
    return AXIOS.get(`/user/` + userId)
  },
  createUser (firstName, lastName) {
    return AXIOS.post(`/user/` + firstName + '/' + lastName)
  },
  getSecured (user, password) {
    return AXIOS.get(`/secured/`, {
      auth: {
        username: user,
        password: password
      }})
  },
  getTestQuery (query){
    return AXIOS.get(`/runquery/`+query)
  },
  getCachePrepare (){
    return AXIOS.get(`/runquery/cachePrepare`)
  },
  getQueriesPrepare (){
    return AXIOS.get(`/runquery/queriesPrepare`)
  },
  getReadAllMemcached (){
    return AXIOS.get(`/runquery/readAllMemcached`)
  },
  getClearMemcached (){
    return AXIOS.get(`/runquery/clearMemcached`)
  },
  getRunExperiment (){
    return AXIOS.get(`/runquery/experiment`)
  },
  getRunCompare (query){
    return AXIOS.get(`/runquery/compare/`+query)
  },
  getRunAQuery (query){
    return AXIOS.get(`/runquery/`+query)
  },
  getWarpAQuery (query){
    return AXIOS.get(`/runquery/warpscript/`+query)
  },
  getInfoCustomer (info, user, pass){
    return AXIOS.get(`/hanoi-phap/`+info+'/'+user+'/'+pass)
  },
  getCommonCustomer (info, user, pass){
    return AXIOS.get(`/getCommon/`+info+'/'+user+'/'+pass)
  }
}

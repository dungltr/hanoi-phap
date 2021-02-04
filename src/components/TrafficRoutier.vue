<template>
    <div id="AllPage">
            <button class=”Search__button” @click="callRestService()">CALL the test service</button>
              <h3>{{ response }}</h3> 
              <h3>{{ test }}</h3>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import backendapi from './apiLe/backend-api'
Vue.use(VueAxios, axios)
export default {
  name: 'testTrafficRoutier',
  data() {
    return {
      urlHost: "http://207.154.240.138:8098",
      response: [],
      test: []
    }
  },
  methods: {
    callRestService() {
      var urlExperiment = this.urlHost + "/api/hello"
      axios({ method: "GET", "url": urlExperiment }).then(result => {
       this.test = result.data
       }, error => {
       console.error(error)
      })
      backendapi.hello()
        .then(response => {
          // JSON responses are automatically parsed.
          this.response = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
      //this.test = 'testTrafficRoutier'
    }
  }
}
</script>
<style scoped>
#AllPage {
  margin: 5%;
  background-color: #A0FFF7;
  padding: 5% ;
}

input {
  margin-right: 3%;
}

h6 {
  font-weight: bold;
  text-transform: uppercase ;
}

#BtnValider {
  display: block;
  margin-right: 0 ;
}

#jour {
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>

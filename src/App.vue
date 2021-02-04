<template>
  <div id="app">
    <b-tabs card>
	<b-tab title="Find a customer" active>
            <FindACustomer />
        </b-tab>  
   </b-tabs>
  </div>
</template>

<script>
import FindACustomer from './components/FindACustomer.vue';
export default {
  name: 'App',
  components: {
    FindACustomer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

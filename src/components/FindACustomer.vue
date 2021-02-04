<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="name:"
        label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          required
          placeholder="Nhập tên đăng nhập"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Your Pass:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.pass"
          required
          placeholder="Nhập mật khẩu"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Information or ID:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.info"
          :options="info"
          required
          placeholder="Nhập thông tin khách hàng"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button @click="onClickFaceBook" variant="danger">Facebook</b-button>
      <b-button @click="onClickHanoiPhap" variant="primary">HanoiPhap</b-button>
      <b-button @click="onClickVietPhap" variant="success">VietPhap</b-button>
      <b-button @click="onClickCommon" variant="primary">Common</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Thông tin khách hàng">
          <pre>{{ experiment }}</pre>
          <pre>{{ trueLink }}</pre> 
    </b-card>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import api from './backend-api'
import openFB from './utils'
Vue.use(VueAxios, axios)
  export default {
    data() {
      return {
        form: {
          name: '',
          pass: '',
          info: '',
          },
        link: {
          facebook: "https://www.facebook.com/",
          httpHanoi: "https://www.facebook.com/BinhLannion/inbox/?mailbox_id=1762705240471239&selected_item_id=",
          httpViet: "https://www.facebook.com/DungLannion/inbox/?mailbox_id=126207165563837&selected_item_id=",
          id: '',
        }, 
        trueLink: '',
        experiment: [],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
          api.getInfoCustomer(this.form.info,this.form.name,this.form.pass).then(response => {
          this.experiment = response.data
          console.log(response)
          })
            .catch(error => {
            this.errors.push(error)
          })           
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values      
        this.form.name = ''
        this.form.pass = ''
        this.form.info = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })       
      },
      onClickHanoiPhap(){
        openFB.openFB('Phap=?', api, this.form.info,this.form.name,this.form.pass, this.link.httpHanoi)
      },
      onClickVietPhap(){
        openFB.openFB('Phap=?', api, this.form.info,this.form.name,this.form.pass, this.link.httpViet)
      },
      onClickFaceBook(){
        openFB.openFB('book=', api, this.form.info,this.form.name,this.form.pass, this.link.facebook)
      },
      onClickCommon(){
        api.getCommonCustomer(this.form.info,this.form.name,this.form.pass).then(response => {
          this.experiment = response.data
          console.log(response)
          })
            .catch(error => {
            this.errors.push(error)
          })    
      }
    }
  }
</script>

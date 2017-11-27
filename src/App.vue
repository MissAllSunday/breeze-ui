<template>
  <div id="app">
    <Breeze
      :users='{"1":{"user_id":1,"name":"Test","avatar":"lol"},"2":{"user_id":2,"name":"Test ","avatar":"qwerty"}}'
      :status='[{"id":"1","body":"test","user_id":1,"time":1511823584},{"id":"1","body":"another test","user":2,"time":1511823584}]'/>
  </div>
</template>

<script>
import Breeze from './components/Breeze'
import Comment from './components/Comment'
import Post from './components/Post'
import Toasted from 'vue-toasted'
import {Tabs, Tab} from 'vue-tabs-component'
import VeeValidate from 'vee-validate'
import swal from 'sweetalert2'

export default {
  name: 'app',
  components: {
    Breeze,
    Comment,
    Post,
    Toasted,
    Tabs,
    Tab,
    VeeValidate,
    swal
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

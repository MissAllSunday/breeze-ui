<template>
  <div id="app">
    <Breeze/>
  </div>
</template>

<script>
import Breeze from './components/Breeze'
import Post from './components/Post'
import Toasted from 'vue-toasted'
import {Tabs, Tab} from 'vue-tabs-component'

export default {
  name: 'app',
  components: {
    Breeze,
    Post,
    Toasted,
    Tabs,
    Tab
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

<template>
  <div id="app">
    <Breeze/>
  </div>
</template>

<script>
import Breeze from './components/Breeze'
import Tabs from './components/Tabs'
import More from './components/More'
import Post from './components/Post'

export default {
  name: 'app',
  components: {
    Breeze,
    Tabs,
    More,
    Post
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

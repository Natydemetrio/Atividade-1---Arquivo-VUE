<template>
  <PaginaPrincipal msg="Welcome to Your Vue.js App"/>
  <ImagensDiversas msg="Welcome to Your Vue.js App"/>
  <VideoUnico msg="Welcome to Your Vue.js App"/>
</template>

<script>
import PaginaPrincipal from './components/PaginaPrincipal.vue'
import ImagensDiversas from './components/ImagensDiversas.vue'
import VideoUnico from './components/VideoUnico.vue';


export default {
  name: 'App',
  components: {
    PaginaPrincipal,
    ImagensDiversas,
    VideoUnico
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

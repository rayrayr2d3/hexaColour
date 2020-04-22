<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ColourConverter header="Welcome to Your Vue.js App" text="text text text" />
  </div>
</template>

<script>
import ColourConverter from './components/colourConverter.vue'

export default {
  name: 'App',
  components: {
    ColourConverter
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

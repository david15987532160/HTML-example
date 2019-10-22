<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/img/logo.png">
<!--    <HelloWorld msg="Welcome Quoc Anh to Your Vue.js App"/>-->
    <sample-component msg="This is sample Component!!!"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import sampleComponent from "./components/sampleComponent.vue";

export default {
  name: 'app',
  components: {
    sampleComponent,
    // HelloWorld

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

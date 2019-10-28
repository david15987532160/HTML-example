<template>
  <div class="hello">
    <h1>{{ msg }} <span>Vuejs!!!</span></h1>
    
    <div id="body">
      <input type="text" v-on:input="changeValue">
      {{ reversedString }}
    </div>

    <div id="footer">
      <p>{{ name }}</p>
    </div>
  </div>
</template>

<script src="../assets/js/helloWorld.js"/>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style> -->
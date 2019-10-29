<template>
  <div class="hello">
    <h1>
      {{ msg }}
      <span>Vuejs!!!</span>
    </h1>

    <div id="body">
      <input type="text" v-on:input="changeValue" placeholder="String to inverse..." />
      <p v-once>{{ mail }}</p>
      {{ reversedString }}
    </div>

    <div id="footer">
      <a v-bind:href="link" target="_blank">{{ name }}</a>
    </div>
  </div>
</template>

<script src="../assets/js/helloWorld.js"/>
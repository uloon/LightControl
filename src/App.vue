<template>
  <div id="app">
    <Leader />
    <router-view></router-view>
  </div>
</template>

<script>
import Leader from "./components/Leader.vue";
export default {
  name: "App",
  components: { Leader },
};
</script>

<style>
*,
*:before,
*:after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
a {
  text-decoration: none;
  color: #333;
}
#app {
  display: flex;
  height: 100%;
}
</style>
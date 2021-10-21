<template>
  <div id="leader">
    <ul>
      <router-link to="/"><li>首页</li></router-link>
      <router-link to="/textview"><li>表格视图</li></router-link>
      <router-link to="/imageview"><li>地图视图</li></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Leader",
};
</script>

<style scoped>
#leader {
  display: flex;
  width: 200px;
  height: 100%;
  background-color: #ccc;
}
ul,
li {
  width: 100%;
  list-style: none;
}
li {
  height: 100px;
  line-height: 100px;
  text-align: center;
  border-bottom: solid 1px gray;
}
li:hover {
  background-color: rgb(166, 166, 166);
}
.router-link-exact-active {
  font-size: 20px;
}
</style>
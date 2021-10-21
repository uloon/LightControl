<template>
  <div id="homepage">
    <h2>欢迎进入灯控系统！</h2>
    <img src="../assets/homepage.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "Homepage",
};
</script>

<style scoped>
#homepage {
  display: flex;
  width: 70%;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
img {
  width: 80%;
  height: 60%;
}
h2 {
  font-size: 60px;
}
</style>
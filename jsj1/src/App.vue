<template>
  <div id="app">
<Zujian1></Zujian1>
    <router-view/>
  </div>
</template>

<script>
import Zujian1 from "./components/Zujian1";
export default {
  name: 'App',
  components: {Zujian1}
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body{
  width: 100%;
  height: 100%;
}
  #app {
    width: 100%;
    height: 100%;
  }
</style>

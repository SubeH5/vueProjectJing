<template>
    <div class="MyHead">
      <router-link :to="{path:'/zj1'}">这是第一部分</router-link>
      <router-link :to="{path:'/zj2'}">这是第二部分</router-link>
    </div>
</template>

<script>
    export default {
        name: "Zujian1"
    }
</script>

<style scoped>
.MyHead{
  width: 100%;
  height: 30%;
  background-color: orange;

}
</style>

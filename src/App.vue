<template>
  <div id="app"  v-title data-title="学生就业网">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
html,body{
  height: 100%;
  margin: 0px;
  padding: 0px;
}
#app{
  height: 100%;
}
</style>

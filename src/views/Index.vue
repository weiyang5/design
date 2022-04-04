<template>
  <el-container class="container">
    <Sidebar></Sidebar>
    <el-container>
      <Navibar></Navibar>
      <el-main>
        Main
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Navibar from "@/components/Navibar";
export default {
  name: "Login",
  components:{
      Sidebar,Navibar
  },

  methods:{

  }
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
}
</style>
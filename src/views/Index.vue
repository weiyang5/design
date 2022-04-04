<template>
  <el-container class="container">
    <Sidebar :isCollapse="isCollapse"></Sidebar>
    <el-container>
      <el-header>
        <Navibar v-on:handleCollapse="handleCollapse"></Navibar>
      </el-header>
      <el-main>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        </el-breadcrumb>
        <router-view class="rv"></router-view>
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
  data(){
    return{
      isCollapse:false
    }
  },
  methods:{
    handleCollapse(){
      this.isCollapse=!this.isCollapse;
    }
  }
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
}
.el-main{
  background-color: rgba(45, 106, 121, 0.78);
  padding: 0px !important;
}
.el-header{
  padding: 0px !important;
}
.el-breadcrumb{
  background-color: white;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #e2dddd;
  padding-left: 10px;
  box-sizing: border-box;
}
.rv{
  background-color: white;
  margin: 10px;
  padding: 10px;
}
</style>
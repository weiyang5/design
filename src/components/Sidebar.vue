<template>
    <el-aside :width="isCollapse?'64px':'200px'">
        <div class="logo">
          <img src="~@/assets/logo.png">
          毕业生就业平台
        </div>
      <el-menu background-color="#2F4F4F"
               default-active="2"
               text-color="#ffffff"
               style="border: 0px"
               :collapse="isCollapse"
               active-text-color="#e0991e"
      >
            <el-menu-item index="1">
              <i class="el-icon-star-off"></i>
              <span slot="title">选项1</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-star-off"></i>
              <span slot="title">选项1</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-star-off"></i>
              <span slot="title">选项1</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-star-off"></i>
              <span slot="title">选项1</span>
            </el-menu-item>

      </el-menu>
    </el-aside>
</template>

<script>
    export default {
        name: "Sidebar",
        props:['isCollapse']
    }
</script>

<style scoped>
.el-aside{
  background: #2F4F4F;
  transition: width .2s;
}
.el-menu-item{
  padding-left: 10px;
}
.logo{
  height: 60px;
  width: 200px;
  line-height: 60px;
  color: white;
  font-size: 18px;
  font-weight: 700;
  padding-left: 65px;
  box-sizing: border-box;
}
.logo img{
  position: absolute;
  width: 45px;
  height: 45px;
  left: 10px;
  top: 7px;
}
</style>
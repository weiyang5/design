<template>
  <div class="header">
    <span class="collapse" v-on:click="handleCollapse">
        <i class="el-icon-s-unfold"></i>
    </span>
    <div class="user-info">
      <i class="el-icon-chat-line-square"></i>
      <i class="el-icon-full-screen" @click="handleFullScreen"></i>
      <el-dropdown  @command="handleCommand">
              <span class="el-dropdown-link">
                {{account}}<i class="el-icon-caret-bottom"></i>
              </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="home">
            <i class="el-icon-s-home"></i>
            网站首页
          </el-dropdown-item>
          <el-dropdown-item command="password">
            <i class="el-icon-edit-outline"></i>
            修改密码
          </el-dropdown-item>
          <el-dropdown-item command="logout">
            <i class="el-icon-s-unfold"></i>
            退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import screenfull from 'screenfull';
import local from "@/store/local";
export default {
  name: "Navibar",
  data(){
    return{
    }
  },
  computed:{
    account(){
      return local.getUserInfo().account
    }
  },
  methods:{
    handleCollapse(){
      this.$emit('handleCollapse');
    },
    handleFullScreen(){
      screenfull.toggle();
    },
    handleCommand(type){
      if(type === 'logout'){
        this.$confirm('确定要退出吗？','退出提示',).then(()=>{
          this.$router.push('/login');
          local.clear()
        }).catch(()=>{});
      }
      if(type === 'home'){
        this.$router.push('/');
      }
    }
  }
}
</script>

<style scoped>
.header{
  height: 60px;
  background-color: #e0991e;
  width: 100%;
  padding: 0px;
  line-height: 60px;
  display: flex;
}
.user-info {
  height: 60px;
  margin-left: auto;
  width: 400px;
  padding-right: 20px;
  text-align: right;
}
.collapse{
  cursor: pointer;
  padding:0px 20px;
}
.user-info>i{
  cursor: pointer;
  padding: 10px 15px;
}
.el-dropdown{
  margin-left: 10px;
}
.el-dropdown-link{
  cursor: pointer;
}
.span-style{
  cursor: pointer;
  padding: 0px 20px;

}
</style>
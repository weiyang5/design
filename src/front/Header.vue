<template>
  <div>
    <!--顶部区域-->
    <div class="top">
      <div class="main">
        <img src="../assets/jmu.png" width="465px">
        <span v-if="!loginState">
                    <router-link to="/reg">注册</router-link>
                        |
                    <router-link to="/login">登录</router-link>
                </span>
        <span v-else>
                    <router-link to="/index">管理中心</router-link>
                </span>
      </div>
    </div>
    <!--导航区-->
    <div class="nav">
      <div class="main">
        <ul>
          <li>
            <el-dropdown>
              <router-link to="/" >
                                <span class="el-dropdown-link">
                                 主页
                                </span>
              </router-link>
              <el-dropdown-menu slot="dropdown"></el-dropdown-menu>
            </el-dropdown>
          </li>

          <li v-for="(item,index) in channels" :key="index">
            <el-dropdown trigger="hover" :show-timeout="0">
                          <span class="el-dropdown-link">
                              <router-link :to="`/list/${item.id}`" >{{item.label}}</router-link>
                          </span>
              <el-dropdown-menu slot="dropdown">
                <template v-for="(item2,index2) in item.children">
                  <el-dropdown-item :key="index2">
                    <router-link class="nav-sub" :to="`/list/${item2.id}`" > {{item2.label}}</router-link>
                  </el-dropdown-item>
                </template>
              </el-dropdown-menu>
            </el-dropdown>
          </li>

          <li>
            <el-dropdown>
              <router-link to="/post_list">
                              <span class="el-dropdown-link">
                                职位搜索
                              </span>
              </router-link>
              <el-dropdown-menu slot="dropdown"></el-dropdown-menu>
            </el-dropdown>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {channel_tree} from "@/api/front";
import local from "@/store/local";

export default {
  name: "Header",
  data(){
    return {
      channels:[],
    }
  },
  mounted() {
    this.getChannels();
  },
  computed:{
    loginState(){
      if(local.getToken()){
        return true;
      }else{
        return false;
      }
    }
  },
  methods:{
    getChannels(){
      channel_tree({postion:1}).then(res=>{
        this.channels = res.data;
      });
    }
  }
}
</script>

<style scoped>
</style>
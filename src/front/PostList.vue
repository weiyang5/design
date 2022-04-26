<template>
  <div>

    <Header></Header>

    <div class="main mar-20">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!--焦点区-->
    <div class="main mar-20">
      <el-row :gutter="15">
        <el-col :span="16">
          <el-card style="min-height: 1200px;overflow:visible;">
            <div slot="header" class="clearfix">
              <span>职位搜索</span>
            </div>
            <ul class="post-list">
              <li v-for="(item,index) in posts" :key="index">
                <a href="#">
                  {{item.name}}
                  <span style="float: right">
                                        <el-button type="primary" @click="send(item.id,item.companyId)" size="mini" round>申请职位</el-button>
                                        <el-button type="danger"  @click="favor(item.id,item.companyId)"  size="mini" round>收藏</el-button>
                                    </span>
                </a>
                <p>
                  <span>{{item.salary}}</span>
                  <span>{{item.type}}</span>
                  <span>{{item.size}}</span>
                  <span>{{item.companyName}}</span>
                </p>
              </li>
            </ul>
            <el-pagination
                background
                layout="prev, pager, next,total"
                @current-change="handleCurrentChange"
                :total="total">
            </el-pagination>
          </el-card>
        </el-col>
        <el-col :span="8">
          <Hot></Hot>
        </el-col>
      </el-row>
    </div>


    <Footer></Footer>

  </div>

</template>

<script>
import '../assets/css/styles.css'
import Header from "./Header";
import Footer from "./Footer";
import Hot from "./Hot";
import {post_query} from "@/api/front";
import {send_create} from "@/api/send";
import {favor_create} from "@/api/favor";
import local from "@/store/local";
import {message} from "@/utils/message";

export default {
  name: "Index",
  components: {Hot, Footer, Header},
  data(){
    return {
      posts:[],
      total:0,
      params:{
        name:'',
        page:1
      },
    }
  },
  mounted() {
    this.getPostList({});
  },
  methods:{
    handleCurrentChange(val){
      this.params.page = val
      console.log(this.params);
      this.getPostList(this.params);
    },
    getPostList(params){
      post_query(params).then(res=>{
        this.posts = res.data;
        this.total = res.total;
        console.log(this.posts)
      });
    },
    send(postId,companyId){
      if(local.getToken()){
        if(local.getUserInfo().type == 2){
          //执行申请
          send_create({postId:postId,companyId:companyId}).then(res=>{
            message.success(res.msg);
          })
        }else{
          message.error("非学生登录不能申请");
        }
      }else{
        message.error("请先登录");
      }
    },
    favor(postId,companyId){
      if(local.getToken()){
        if(local.getUserInfo().type == 2){
          //执行申请
          favor_create({postId:postId,companyId:companyId}).then(res=>{
            message.success(res.msg);
          })
        }else{
          message.error("非学生登录不能收藏");
        }
      }else{
        message.error("请先登录");
      }
    }

  }
}
</script>

<style scoped>

</style>
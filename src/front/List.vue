<template>
  <div v-title :data-title="channel.name">
    <Header></Header>
    <div class="main mar-20">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">{{channel.name}}</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!--焦点区-->
    <div class="main mar-20">
      <el-row :gutter="15">
        <el-col :span="16">
          <el-card style="height: auto;overflow:visible;">
            <div slot="header" class="clearfix">
              <span>文章列表</span>
            </div>
            <ul class="list">
              <li v-for="(item,index) in articles.slice(0,15)" :key="index">
                <router-link :to="`/detail/${item.id}`" target="_blank">
                  {{item.title}}
                </router-link>
                <p>
                  {{item.summary}}
                </p>
              </li>
            </ul>
            <el-pagination
                background
                :current-page="params.page"
                @current-change="handleCurrentChange"
                layout="prev, pager, next "
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
import {article_query,channel_detail} from "@/api/front";
import Hot from "./Hot";
export default {
  name: "Index",
  components: {Hot, Footer, Header},
  data(){
    return {
      articles:[],
      channel:{},
      total:0,
      params:{
        channelId:this.$route.params.id,
        page:1
      },
    }
  },
  mounted() {
    this.getChannel(this.$route.params.id)
    this.getArticles({channelId:this.$route.params.id})
  },
  beforeRouteUpdate (to, from, next) {
    this.params.page = 1;
    this.getArticles({channelId:to.params.id})
    this.getChannel(to.params.id)
    next();
  },
  methods:{
    handleCurrentChange(val){
      this.params.page = val;
      let params  = {channelId:this.channel.id,page:this.page}
      this.getArticles(params)
    },
    getArticles(params){
      article_query(params).then(res=>{
        this.articles = res.data;
        this.total = res.total;
      })
    },
    getChannel(channelId){
      channel_detail(channelId).then(res=>{
        this.channel = res.data;
      })
    }
  }
}
</script>

<style scoped>

</style>
<template>
    <el-aside :width="isCollapse?'64px':'200px'">
        <div class="logo">
          <img src="~@/assets/logo.png">
          毕业生就业平台
        </div>
      <el-menu background-color="#2F4F4F"
               text-color="#ffffff"
               style="border: 0px"
               :collapse="isCollapse"
               active-text-color="#e0991e"
               router
               :default-active="active"
      >
            <el-menu-item  @click="handleMenuItem(item)" :index="item.href" v-for="(item,index) in menus" :key="index">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.name }}</span>
            </el-menu-item>

      </el-menu>
    </el-aside>
</template>

<script>
    export default {
        name: "Sidebar",
        props:['isCollapse'],
        data(){
          return{
            menus:[],
            active:''
          }
        },
        created() {
          this.$store.dispatch('getMenus').then(res=>{
            if(res){
              this.menus = res.data
              let  selectMenu;
              if(this.$route.path){
                this.active = this.$route.name
                selectMenu =  this.menus.filter(v=>v.href == this.active)[0];
              }else{
                this.active = this.menus[0].href
                selectMenu = this.menus[0]
              }
              this.handleMenuItem(selectMenu)
            }
          })
        },
        methods:{
          handleMenuItem(item){
            this.$emit('handleMenuItem',item)
          }
      }
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
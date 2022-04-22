import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login";
import {userRouterMap} from "@/router/user_router";
import {companyRouterMap} from "@/router/company_router";
import local from "@/store/local";
import {studentRouterMap} from "@/router/student_router";
import Index from "@/front/Index"
Vue.use(VueRouter)

const constantRouterMap=[
    {
        path:'/',
        name:'首页',
        component:Index
    },{
        path:'/list/:id',
        name:'列表页面',
        component:()=>import('@/front/List')
    },
    {
        path:'/detail/:id',
        name:'详情页面',
        component:()=>import('@/front/Detail')
    },
    {
        path:'/post_list',
        name:'详情页面',
        component:()=>import('@/front/PostList')
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('@/views/Login')
    },
]
let arr=[]
if(local.getUserInfo()){
    if(local.getUserInfo().type==0){
        arr=[...constantRouterMap,...userRouterMap]
    }
    if(local.getUserInfo().type==1){
        arr=[...constantRouterMap,...companyRouterMap]
    }
    if(local.getUserInfo().type==2){
        arr=[...constantRouterMap,...studentRouterMap]
    }
}else{
    arr=[...constantRouterMap]
}

const router =new VueRouter({
    routes:arr
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login";
import {userRouterMap} from "@/router/user_router";
import {companyRouterMap} from "@/router/company_router";
import local from "@/store/local";
import {studentRouterMap} from "@/router/student_router";
Vue.use(VueRouter)

const constantRouterMap=[
    {
        path:'/',
        redirect:'/login'
    },
    {
        path:'/login',
        name:'login',
        component:Login
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
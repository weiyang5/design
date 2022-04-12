import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login";
import {userRouterMap} from "@/router/user_router";
import {companyRouterMap} from "@/router/company_router";
import local from "@/store/local";
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
if(local.getUserInfo().type==0){
    arr=[...constantRouterMap,...userRouterMap]
}else if(local.getUserInfo().type==1){
    arr=[...constantRouterMap,...companyRouterMap]
}
const router =new VueRouter({
    routes:arr
})

export default router
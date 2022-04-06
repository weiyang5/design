import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login";
import {userRouterMap} from "@/router/user_router";
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

const router =new VueRouter({
    routes:[...constantRouterMap,...userRouterMap]
})

export default router
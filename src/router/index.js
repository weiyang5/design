import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login";

Vue.use(VueRouter)

const router =new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/login'
        },
        {
            path:'/login',
            name:'login',
            component:Login
        },
        {
            path:'/index',
            name:'index',
            component:()=>import('@/views/Index')
        }
    ]
})

export default router
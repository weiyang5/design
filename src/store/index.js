import Vue from 'vue'
import Vuex from 'vuex'
import {login} from  '@/api/login'
import local from "@/store/local";
import {queryMenus} from "@/api/menu";
Vue.use(Vuex)

const store=new Vuex.Store({
    state:{
        token:null,
        userInfo:null
    },
    getters:{},
    mutations:{
        SET_TOKEN:(state,token)=>{
            state.token=token
        },
        SET_USERINFO:(state,userInfo)=>{
            state.userInfo=userInfo
        }
    },
    actions:{
        login({commit},loginUser){
            return new Promise((resolve, reject)=>{
                login(loginUser).then(res=>{
                    if(res) {
                        commit('SET_TOKEN', res.data.token);
                        commit('SET_USERINFO', res.data);
                        local.setToken(res.data.token);
                        local.setUserInfo(res.data);
                        resolve(res)
                    }
                }).catch(error=>{
                    reject(error);
                })
            })
        },
        getMenus({commit}){
            return new Promise((resolve,reject)=>{
                queryMenus().then(res=>{
                    resolve(res);
                })
            })
        }
    }
});

export default store
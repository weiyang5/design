<template>
    <el-card>
        <div slot="header" class="clearfix">
            <span>热点文章</span>
        </div>
        <ul class="hot">
            <li v-for="(item,index) in articles" :key="index">
                <router-link :to="`/detail/${item.id}`" target="_blank">
                    {{item.title}}
                </router-link>
            </li>
        </ul>
    </el-card>
</template>

<script>
    import {hot} from '@/api/front'
    export default {
        name: "Hot",
        data(){
            return{
                articles:[],
            }
        },
        mounted() {
            hot().then(res=>{
                this.articles = res.data;
            })
        }
    }
</script>

<style scoped>

</style>
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
                        <el-tabs v-model="activeName">
                            <el-tab-pane label="学生注册" name="first">
                                <student-reg></student-reg>
                            </el-tab-pane>
                            <el-tab-pane label="企业注册" name="second">
                                <company-reg></company-reg>
                            </el-tab-pane>
                        </el-tabs>
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
    import StudentReg from "./StudentReg";
    import CompanyReg from "./CompanyReg";

    export default {
        name: "Reg",
        components: {StudentReg,CompanyReg, Hot, Footer, Header},
        data(){
            return {
                activeName:'first'
            }
        },
        mounted() {
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
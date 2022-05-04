<template>
    <div style="width: 500px;margin: auto">
<!--        <my-form ref="myForm" :rules="rules" :form="form" :items="items" :save="save"></my-form>-->
      <el-form  ref="myForm" :rules="rules"  :model="form" label-width="100px">
        <template v-for="(item,index) in items">
          <el-row :key="index">
            <el-col :span="24">
              <template v-if="['text','password','number','email'].indexOf(item.type) != -1">
                <el-form-item :label="item.label" :prop="item.prop">
                  <el-input :type="item.type" v-model="form[item.name]" :placeholder="item.placeholder"></el-input>
                </el-form-item>
              </template>
            </el-col>
          </el-row>
        </template>
        <el-row>
          <el-form-item style="text-align: center">
            <el-button icon="el-icon-refresh-right" @click="resetField" type="primary">重置</el-button>
            <el-button icon="el-icon-s-claim" @click="save" type="primary">注册</el-button>
          </el-form-item>
        </el-row>
      </el-form>
    </div>
</template>

<script>
    import {company_create} from "@/api/front";
    import MyForm from "@/components/MyForm";

    export default {
        name: "CompanyReg",
        components:{MyForm},
        data(){
            let validatePwd = (rule,value,callback)=>{
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.form.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            }
          let validatePassword=(rule,value,callback)=> {
            let reg=/^[a-zA-Z0-9]{4,10}$/;
            if(reg.test(value)==false){
              callback(new Error('密码不能含有非法字符，长度应在4-10之间'));
            }else{
              callback();
            }
          }
          let validatePhone=(rule,value,callback)=> {
            let phone=/^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\\d{8}$/
            if(phone.test(value)==false){
              callback(new Error('请输入正确的手机号'));
            }else{
              callback();
            }
          }
            return{
                form:{
                    name:'',
                    account:null,
                    password:'',
                    password2:'',
                    contact:'',
                    telephone:'',
                },
                rules:{
                    name:[{required:true,message:'必填项不能为空'}],
                    account:[{required:true,message:'必填项不能为空'}],
                    password:[{required:true,message:'必填项不能为空'},
                      {required:true,validator:validatePassword}],
                    password2:[
                        {required:true,message:'必填项不能为空'},
                        {required:true,validator:validatePwd}
                    ],
                    phone:[{required:true,message:'必填项不能为空'},
                      {required:true,validator:validatePhone}],
                },
                items:[
                    {type:'text',label:'公司名称',prop:'name',name:'name',placeholder:'请输入公司名称'},
                    {type:'text',label:'账号',prop:'account',name:'account',placeholder:'账号'},
                    {type:'password',label:'密码',prop:'password',name:'password',placeholder:'密码'},
                    {type:'password',label:'确认密码',prop:'password2',name:'password2',placeholder:'确认密码'},
                    {type:'text',label:'联系人',prop:'contact',name:'contact',placeholder:'联系人'},
                    {type:'text',label:'联系电话',prop:'telephone',name:'telephone',placeholder:'联系电话'},
                ]
            }
        },
        methods:{
            save(){
                    let param = this.form;
                    company_create(param).then(res=>{
                        this.$message.success('注册成功,请静候管理员审核');
                    })

            },
          resetField(){
            this.$refs['myForm'].resetFields();
          },

        }

    }
</script>

<style scoped>

</style>
<template>
  <el-dialog title="新增" :visible="param.visible" @close="param.close">
<!--    <el-form ref="form" :model="form" :rules="rules" label-width="90px">-->
<!--      <el-form-item label="用户名" prop="userName">-->
<!--        <el-input v-model="form.userName" placeholder="请输入用户名"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="姓名" prop="name">-->
<!--        <el-input v-model="form.name" placeholder="请输入姓名"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="密码" prop="password">-->
<!--        <el-input v-model="form.password" placeholder="请输入密码"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item style="text-align: center">-->
<!--        <el-button icon="el-icon-refresh-right" type="primary">重置</el-button>-->
<!--        <el-button icon="el-icon-circle-check" @click="save" type="primary">保存</el-button>-->
<!--      </el-form-item>-->
<!--    </el-form>-->
    <my-form ref="myForm" :rules="rules" :form="form" :items="items" :save="save"></my-form>
  </el-dialog>
</template>

<script>
import {create} from "@/api/user";
import MyForm from "@/components/MyForm";
export default {
  name: "Add",
  components:{MyForm},
  props:{
    param:{
      type:Object,
      default:()=>{}
    }
  },
  data(){
    return{
      form:{
        userName: '',
        name:'',
        password:''
      },
      rules:{
        userName:[{required:true,message:'用户名不能为空'}],
        name:[{required:true,message:'姓名不能为空'}],
        password:[{required:true,message:'密码不能为空'}],
      },
      items:[
        {type:'text',label:'用户名',prop:'userName',name:'userName',placeholder:'请录入用户名'},
        {type:'text',label:'姓名',prop:'name',name:'name',placeholder:'请录入姓名'},
        {type:'password',label:'密码',prop:'password',name:'password',placeholder:'请录入密码'},
      ]
    }
  },
  methods:{
    save(){
      let flag = this.$refs['myForm'].validateForm();
        if(flag){
          create(this.form).then(res=>{
            this.$message.success(res.msg);
            this.param.close();
            this.param.callback();
          })
        }
    },
  }
}
</script>

<style scoped>

</style>
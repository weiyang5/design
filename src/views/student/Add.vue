<template>
  <el-dialog title="新增" :visible="param.visible" @close="param.close">
    <my-form ref="myForm" :rules="rules" :form="form" :items="items" :save="save"></my-form>
  </el-dialog>
</template>

<script>
import {create} from "@/api/student";
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
      },
      rules:{
        name:[{required:true,message:'姓名不能为空'}],
        account:[{required:true,message:'姓名不能为空'}],
        password:[{required:true,message:'密码不能为空'}],
      },
      items:[
        {type:'text',label:'姓名',prop:'name',name:'name',placeholder:'请录入姓名'},
        {type:'text',label:'账号',prop:'account',name:'account',placeholder:'请录入账号'},
        {type:'password',label:'密码',prop:'password',name:'password',placeholder:'请录入密码'},
        {type:'date',label:'出生日期',prop:'birthday',name:'birthday',placeholder:'请录入账号'},
        {type:'text',label:'专业',prop:'special',name:'special',placeholder:'请录入专业'},
        {type:'text',label:'学院',prop:'college',name:'college',placeholder:'请录入学院'},
        {type:'text',label:'学历',prop:'education',name:'education',placeholder:'请录入学历'},
        {type:'text',label:'手机号',prop:'phone',name:'phone',placeholder:'请录入手机号'},
        {type:'select',label:'性别',prop:'sex',name:'sex',placeholder:'性别',options:[{value:1,label:'男'},{value:0,label:'女'}]},
        {type:'date',label:'毕业时间',prop:'graduateDate',name:'graduateDate',placeholder:'请录入毕业时间'},

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
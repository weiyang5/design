<template>
  <el-dialog title="新增" :visible="param.visible" @close="param.close">
    <my-form ref="myForm" :rules="rules" :form="form" :items="items" :save="save"></my-form>
  </el-dialog>
</template>

<script>
import {create} from "@/api/company";
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
        name: '',
        contact:'',
      },
      rules:{
        name:[{required:true,message:'公司名称不能为空'}],
        contact:[{required:true,message:'联系人不能为空'}],
        password:[{required:true,message:'密码不能为空'}],
        type:[{required:true,message:'类型不能为空'}],
        telephone:[{required:true,message:'联系电话不能为空'}],
      },
      items:[
        {type:'text',label:'公司名称',prop:'name',name:'name',placeholder:'请录入公司名称'},
        {type:'text',label:'类型',prop:'type',name:'type',placeholder:'请录入类型'},
        {type:'password',label:'密码',prop:'password',name:'password',placeholder:'请录入密码'},
        {type:'text',label:'联系人',prop:'contact',name:'contact',placeholder:'请录入联系人'},
        {type:'text',label:'联系电话',prop:'telephone',name:'telephone',placeholder:'请录入联系电话'},
        {type:'text',label:'邮箱',prop:'email',name:'email',placeholder:'请录入邮箱'},
        {type:'text',label:'地址',prop:'addr',name:'addr',placeholder:'请录入地址'},
        {type:'text',label:'规模',prop:'size',name:'size',placeholder:'请录入规模'},

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
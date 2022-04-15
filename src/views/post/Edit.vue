<template>
  <el-dialog title="修改" :visible="param.visible" @close="param.close">
    <MyForm ref="myForm" :rules="rules" :form="form" :items="items" :save="save"></MyForm>
  </el-dialog>
</template>

<script>
import {update} from "@/api/post";
import MyForm from "@/components/MyForm";
export default {
  name: "Edit",
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
        id:'',
        userName: '',
        name:'',
        password:''
      },
      rules:{
        name:[{required:true,message:'必填项不能为空'}],
        education:[{required:true,message:'必填项不能为空'}],
        salary:[{required:true,message:'必填项不能为空'}],
      },
      items:[
        {type:'text',label:'职位名称',prop:'name',name:'name',placeholder:'职位名称'},
        {type:'text',label:'学历要求',prop:'education',name:'education',placeholder:'学历要求'},
        {type:'text',label:'职位薪水',prop:'salary',name:'salary',placeholder:'职位薪水'},
        {type:'area',label:'职位描述',prop:'description',name:'description',placeholder:'职位描述'},
      ]
    }
  },
  mounted() {
    this.form=JSON.parse(JSON.stringify(this.param.form));
  },
  methods:{
    save(){
      let flag = this.$refs['myForm'].validateForm();
      if(flag){
        update(this.form).then(res=>{
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
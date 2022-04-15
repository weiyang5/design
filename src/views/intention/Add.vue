<template>
  <el-dialog title="新增" :visible="param.visible" @close="param.close">
    <my-form ref="myForm" :rules="rules" :form="form" :items="items" :save="save"></my-form>
  </el-dialog>
</template>

<script>
import {create} from "@/api/intention";
import {query} from "@/api/resume";
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
        resumeId:'',
        name:'',
        salary:'',
        city:'',
        type:'',
        industry:'',
      },
      rules:{
        resumeId:[{required:true,message:'必填项不能为空'}],
        name:[{required:true,message:'必填项不能为空'}],
        salary:[{required:true,message:'必填项不能为空'}],
      },
      items:[
        {type:'select',label:'简历',prop:'resumeId',name:'resumeId',placeholder:'简历',options:[]},
        {type:'text',label:'name',prop:'name',name:'name',placeholder:'名称'},
        {type:'text',label:'薪资要求',prop:'salary',name:'salary',placeholder:'salary'},
        {type:'text',label:'工作城市',prop:'city',name:'city',placeholder:'城市'},
        {type:'text',label:'工作性质',prop:'type',name:'type',placeholder:'工作性质'},
        {type:'text',label:'期望行业',prop:'industry',name:'industry',placeholder:'期望行业'},

      ]
    }
  },
  mounted() {
    query({}).then(res=>{
      let arr = [];
      res.data.forEach(item=>{
        let param = {value:item.id,label:item.name}
        arr.push(param)
      })
      this.items[0].options = arr;
    });
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
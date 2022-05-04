<template>
  <el-dialog title="新增" :visible="param.visible" @close="param.close">
    <my-form ref="myForm" :rules="rules" :form="form" :items="items" :save="save"></my-form>
  </el-dialog>
</template>

<script>
import {create} from "@/api/dict";
import MyForm from "@/components/MyForm";
export default {
  name: "Add",
  components:{MyForm},
  props:{
    param:{
      type:Object,
      default:()=>{}
    },
    typeId:{
      type:Number
    }
  },
  data(){
    return{
      form:{
        typeId:this.typeId,
        dictKey: '',
        dictVal:'',
        sort:10,
        status:0
      },
      rules:{
        dictKey:[{required:true,message:'此项为必填项'}],
        dictVal:[{required:true,message:'此项为必填项'}],
      },
      items:[
        {type:'text',label:'字典名称',prop:'dictKey',name:'dictKey',placeholder:'请录入字典名称'},
        {type:'text',label:'字典值',prop:'dictVal',name:'dictVal',placeholder:'请录入字典值'},
        {
          type:'select',label:'状态',prop:'status',name:'status',placeholder:'请选择状态',
          options:[{value:0,label:'正常'},{value:1,label:'已删除'}]
        },
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
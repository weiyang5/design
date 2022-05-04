<template>
  <el-dialog title="审核公司" :visible="param.visible" @close="param.close">
    <MyForm ref="myForm" :rules="rules" :form="form" :items="items" :save="save"></MyForm>
  </el-dialog>
</template>

<script>
import {update} from "@/api/company";
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
        name: '',
        contact:'',
      },
      rules:{
      },
      items:[
        {type:'text',label:'公司状态',prop:'status',name:'status',placeholder:'1为审核通过，2为审核拒绝'},
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
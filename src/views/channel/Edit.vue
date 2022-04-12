<template>
  <el-dialog title="修改" :visible="param.visible" @close="param.close">
    <my-form ref="myForm" :rules="rules" :form="form" :items="items" :save="save"></my-form>
  </el-dialog>
</template>

<script>
import {update} from "@/api/channel";
import MyForm from "@/components/MyForm";
import {tree} from "@/api/channel";
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
        name:'',
        parentId:null,
        channelImg:'',
        summary:'',
        single:'N',
        url:'',
        content:'',
        sort:'',
        postion:'',
      },
      rules:{
        name:[{required:true,message:'栏目名称不能为空'}],
      },
      items:[
        {type:'text',label:'栏目名称',prop:'name',name:'name',placeholder:'请输入栏目名称'},
        {type:'treeselect',label:'上级栏目',prop:'parentId',name:'parentId',placeholder:'请输选择上级栏目', options:[]},
        {type:'file',label:'标题图',prop:'channelImg',name:'channelImg',placeholder:'上传图片'},
        {type:'text',label:'摘要',prop:'summary',name:'summary',placeholder:'请输入摘要'},
        {type:'switch',label:'单页',prop:'single',name:'single',placeholder:'请选择单页'},
        {type:'text',label:'外链',prop:'url',name:'url',placeholder:'请输入外链'},
        {type:'number',label:'排序号',prop:'sort',name:'sort',placeholder:'请输入排序号'},
        {type:'number',label:'位置',prop:'postion',name:'postion',placeholder:'请输入位置'},
        {type:'area',label:'内容',prop:'content',name:'content',placeholder:'内容...'},

      ]
    }
  },
  mounted() {
    this.form = JSON.parse(JSON.stringify(this.param.form))
    if(this.form.single == 'Y'){
      this.form.single = true
    }else{
      this.form.single = false
    }
    this.channel_tree();
  },
  methods:{
    channel_tree(){
      tree().then(res=>{
        console.log(res.data);
        this.items.forEach(item=>{
          if(item.type=='treeselect' && item.name == 'parentId'){
            item.options= res.data;
          }
        })
      });
    },
    save(){
      let flag = this.$refs['myForm'].validateForm();
      if(flag){
        console.log(this.form)
        let param = this.form;
        if(this.form.single){
          param.single ='Y';
        }else{
          param.single ='N';
        }
        update(param).then(res=>{
          this.$message.success(res.msg);
          this.param.close();
          this.param.callback();
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
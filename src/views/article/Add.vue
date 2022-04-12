<template>
  <el-dialog title="新增" :visible="param.visible" @close="param.close">
    <my-form ref="myForm" :rules="rules" :form="form" :items="items" :save="save"></my-form>
  </el-dialog>
</template>

<script>
import {create} from "@/api/article";
import MyForm from "@/components/MyForm";
import {tree} from "@/api/article";
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
        title:'',
        channelId:null,
        titleImg:'',
        summary:'',
        author:'',
        url:'',
        content:'',
        sort:'',
      },
      rules:{
        title:[{required:true,message:'必填项不能为空'}],
        channelId:[{required:true,message:'必填项不能为空'}],
      },
      items:[
        {type:'text',label:'标题',prop:'title',name:'title',placeholder:'请输入标题'},
        {type:'treeselect',label:'栏目',prop:'channelId',name:'channelId',placeholder:'请输选择栏目', options:[]},
        {type:'file',label:'标题图',prop:'titleImg',name:'titleImg',placeholder:'上传图片'},
        {type:'text',label:'摘要',prop:'summary',name:'summary',placeholder:'请输入摘要'},
        {type:'text',label:'作者',prop:'author',name:'author',placeholder:'请录入作者'},
        {type:'text',label:'外链',prop:'url',name:'url',placeholder:'请输入外链'},
        {type:'number',label:'排序号',prop:'sort',name:'sort',placeholder:'请输入排序号'},
        {type:'area',label:'内容',prop:'content',name:'content',placeholder:'内容...'},

      ]
    }
  },
  mounted() {
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
        create(param).then(res=>{
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
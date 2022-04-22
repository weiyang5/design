<template>
  <el-container>
    <el-aside width="200px"><img border="0" :src="pic" alt="picture" width="160" height="100"></el-aside>
    <el-main><my-form ref="myForm" :rules="rules" :form="form" :items="items" :save="save"></my-form></el-main>
  </el-container>
</template>
<script>
import {update,studentInfo} from "@/api/student";
import {dict_query} from "@/api/dict";
import MyForm from "@/components/MyForm";
export default {
  name: "StudentDetail",
  components: {MyForm},
  data(){
    return{
      pic:null,
      form:{
        id:'',
        name:'',
        birthday:'',
        college:'',
        education:'',
        phone:'',
        sex:'',
        photo:'',
        graduateDate:'',
      },
      rules:{
        name:[{required:true,message:'必填项不能为空'}],
      },
      items:[
        {type:'text',label:'姓名',prop:'name',name:'name',placeholder:'请输入名称'},
        {type:'date',label:'出生日期',prop:'birthday',name:'birthday',placeholder:'出生日期'},
        {type:'text',label:'毕业院校',prop:'college',name:'college',placeholder:'毕业院校'},
        {type:'text',label:'学历',prop:'education',name:'education',placeholder:'学历',options:[]},
        {type:'text',label:'电话',prop:'phone',name:'phone',placeholder:'电话'},
        {type:'select',label:'性别',prop:'sex',name:'sex',placeholder:'性别',options:[{value:1,label:'男'},{value:0,label:'女'}]},
        {type:'file',label:'照片',prop:'photo',name:'photo',placeholder:'照片'},
        {type:'date',label:'毕业时间',prop:'graduateDate',name:'graduateDate',placeholder:'毕业时间'},
      ]
    }
  },
  mounted() {
    this.getInfo();
    this.getDictList1(4);
    this.getDictList2(5);
  },
  methods:{
    getDictList1(typeId){
      dict_query({typeId:typeId}).then(res=>{
        let arr = [];
        res.data.forEach(item=>{
          let p = {value:item.dictKey,label:item.dictVal};
          arr.push(p);
        });
        this.items.forEach(item=>{
          if(item.type=='select' && item.name == 'type'){
            item.options= arr;
          }
        })
      })
    },
    getDictList2(typeId){
      dict_query({typeId:typeId}).then(res=>{
        let arr = [];
        res.data.forEach(item=>{
          let p = {value:item.dictKey,label:item.dictVal};
          arr.push(p);
        });
        this.items.forEach(item=>{
          if(item.type=='select' && item.name == 'size'){
            item.options= arr;
          }
        })
      })
    },

    getInfo(){
      studentInfo().then(res=>{
        this.form = res.data;
        this.pic=res.data.photo;
      })
    },
    save(){
      let flag = this.$refs['myForm'].validateForm();
      if(flag){
        update(this.form).then(res=>{
          this.getInfo();
          this.$message.success(res.msg);

        })
      }
    }
  }
}
</script>

<style scoped>

</style>
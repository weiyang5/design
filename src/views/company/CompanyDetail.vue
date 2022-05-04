<template>
<el-container>
<el-aside width="200px"><img border="0" :src="pic" alt="picture" width="160" height="100"></el-aside>
<el-main><my-form ref="myForm" :rules="rules" :form="form" :items="items" :save="save"></my-form></el-main>
</el-container>
</template>
<script>
import {update,companyInfo} from "@/api/company";
import {dict_query} from "@/api/dict";
import MyForm from "@/components/MyForm";
export default {
  name: "CompanyDetail",
  components: {MyForm},
  data(){
    let validatePhone=(rule,value,callback)=> {
      let phone=/^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\\d{8}$/
      if(phone.test(value)==false){
        callback(new Error('请输入正确的手机号'));
      }else{
        callback();
      }
    }
    return{
      pic:null,
      form:{
        id:'',
        name:'',
        contact:'',
        telephone:'',
        email:'',
        addr:'',
        url:'',
        size:'',
        type:'',
        logo:'',
        description:'',
      },
      rules:{
        name:[{required:true,message:'必填项不能为空'}],
        phone:[{required:true,validator:validatePhone}],
      },
      items:[
        {type:'text',label:'名称',prop:'name',name:'name',placeholder:'请输入名称'},
        {type:'text',label:'联系人',prop:'contact',name:'contact',placeholder:'联系人', options:[]},
        {type:'text',label:'联系电话',prop:'telephone',name:'telephone',placeholder:'联系电话'},
        {type:'text',label:'邮箱',prop:'email',name:'email',placeholder:'邮箱'},
        {type:'text',label:'地址',prop:'addr',name:'addr',placeholder:'地址'},
        {type:'text',label:'外链',prop:'url',name:'url',placeholder:'外链'},
        {type:'text',label:'网址',prop:'url',name:'url',placeholder:'网址'},
        {type:'select',label:'规模',prop:'size',name:'size',placeholder:'规模',options:[]},
        {type:'select',label:'公司类型',prop:'type',name:'type',placeholder:'公司类型',options:[]},
        {type:'file',label:'Logo',prop:'logo',name:'logo',placeholder:'Logo'},
        {type:'area',label:'公司描述',prop:'description',name:'description',placeholder:'内容...'},
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
      companyInfo().then(res=>{
        this.form = res.data;
        this.pic=res.data.logo;
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
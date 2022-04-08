<template>
  <div>
<!--    <el-form :inline="true" :model="params">-->
<!--      <template v-for="(item,index) in items">-->
<!--        <template v-if="['text','number'].indexOf(item.type) !=-1">-->
<!--          <el-form-item :label="item.label" :key="index">-->
<!--            <el-input v-model="params[item.name]" :placeholder="item.placeholder"></el-input>-->
<!--          </el-form-item>-->
<!--        </template>-->
<!--      </template>-->
<!--      <el-form-item >-->
<!--        <el-button @click="search" icon="el-icon-search">查询</el-button>-->
<!--      </el-form-item>-->
<!--    </el-form>-->
    <my-query-form :form="params" :items="items" @search="search"></my-query-form>
    <div class="btn-style">
      <el-button size="small" type="primary" @click="create" round>新增</el-button>
      <el-button size="small" type="primary" @click="update" round>修改</el-button>
      <el-button size="small" type="warning" @click="del" round>删除</el-button>
    </div>
    <my-table ref="mutipTable" :tableData="tableData" :tableCols="tableCols"></my-table>
    <MyPagination :page="params.page" :total="total" @handleCurrentChange="handleCurrentChange"></MyPagination>
    <Add v-if="add.visible" :param="add"></Add>
    <Edit v-if="edit.visible" :param="edit"></Edit>
    <div style="margin-top: 20px">
    </div>
  </div>
</template>

<script>
import {query} from "@/api/user";
import Add from "@/views/user/Add";
import Edit from "@/views/user/Edit";
import {message} from "@/utils/message";
import {del} from "@/api/user";
import MyTable from "@/components/MyTable";
import MyForm from "@/components/MyForm";
import MyPagination from "@/components/MyPagination";
import MyQueryForm from "@/components/MyQueryForm";
export default {
  name : "User",
  components: {MyQueryForm, Edit, Add,MyTable,MyPagination,MyForm},
  data() {
    return {
      total:0,
      tableData: [],
      multipleSelection: [],
      params:{
        userName:'',
        name:'',
        page:1
      },
      add:{
        visible:false,
        close:this.close,
        callback:this.search
      },
      edit:{
        visible:false,
        close:this.close,
        callback:this.search,
        form:null
      },
      selection:[],
      items:[
        {type:'text',label:'用户名',name:'userName',placeholder:'按用户名查询'},
        {type:'text',label:'姓名',name:'name',placeholder:'按关键字查询'},
      ],
      tableCols: [
        {prop:'id', label:'ID', width:80},
        {prop:'userName', label:'用户名'},
        {prop:'name', label:'姓名'},
        {prop:'loginTime', label:'登录时间'},
      ],
    }
  },
  mounted() {
    this.list({});
  },
  methods: {
    handleCurrentChange(val){
      this.params.page = val
      console.log(this.params);
      this.list(this.params);
    },
    search(){
      this.list(this.params);
    },
    handleSelectionChange(selection){
      this.selection=selection;
    },
    list(params){
      query(params).then(res=>{
        this.tableData=res.data;
        this.total=res.total;
      })
    },
    create(){
      this.add.visible=true;
    },
    close(){
      this.add.visible=false;
      this.edit.visible=false;
    },
    update(){
      let selection = this.$refs['mutipTable'].selection;
      if(selection.length==1){
        this.edit.visible=true;
        this.edit.form=selection[0];
      }else{
        message.warning('请选择一条数据进行修改')
      }
    },
    del(){
      let selection = this.$refs['mutipTable'].selection;
      if(selection.length>0){
        this.$confirm('是否确定删除','删除提示').then(()=>{
          let list=selection.map(item=>item.id);
          let ids=list.join(',');
          console.log(ids)
          del(ids).then(res=>{
            message.success(res.msg);
            this.search();
          })
        }).catch(()=>{})
      }else{
        message.warning('请至少选择一条数据进行删除')
      }
    }
  }
}
</script>
<style scoped>

</style>
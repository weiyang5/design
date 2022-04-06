<template>
  <div>
    <div style="height: 50px">
      <el-form :inline="true" :model="form">
        <el-form-item label="用户名">
          <el-input v-model="params.userName" placeholder="按用户名查询"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="params.name" placeholder="按关键字查询"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button @click="search" icon="el-icon-search">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="btn-style">
      <el-button size="small" type="primary" @click="create" round>新增</el-button>
      <el-button size="small" type="primary" @click="update" round>修改</el-button>
      <el-button size="small" type="warning" @click="del" round>删除</el-button>
    </div>
    <MyTable :table-data="tableData" table-cols="tableCols"></MyTable>
    <el-pagination
        background
        @current-change="handleCurrentChange"
        layout="prev, pager, next,total"
        :total=total>
    </el-pagination>
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
export default {
  name : "User",
  components: {Edit, Add,MyTable},
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
      form:{
        userName:'',
        name:''
      }
    }
  },
  mounted() {
    this.list({});
  },
  methods: {
    handleCurrentChange(page){
      console.log(page);
      this.params.page=page;
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

      if(this.selection.length==1){
        this.edit.visible=true;
        this.edit.form=this.selection[0];
      }else{
        message.warning('请选择一条数据进行修改')
      }
    },
    del(){
      if(this.selection.length>0){
        this.$confirm('是否确定删除','删除提示').then(()=>{
          let list=this.selection.map(item=>item.id);
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
<template>
  <div>
    <my-query-form :form="params" :items="items" @search="search"></my-query-form>
    <div class="btn-style">
      <el-button size="small" type="primary" @click="update" round>审核</el-button>
      <el-button size="small" type="warning" @click="del" round>删除</el-button>
    </div>
    <my-table ref="mutipTable" :tableData="tableData" :tableCols="tableCols">
      <template slot="slot_status" slot-scope="scope">
        <el-tag v-if="scope.data.status==0" size="mini" >待审核</el-tag>
        <el-tag v-if="scope.data.status==1" type="success" size="mini" >审核通过</el-tag>
        <el-tag v-if="scope.data.status==2" type="danger" size="mini" >审核拒绝</el-tag>
      </template>
    </my-table>
    <MyPagination :page="params.page" :total="total" @handleCurrentChange="handleCurrentChange"></MyPagination>
    <Add v-if="add.visible" :param="add"></Add>
    <Edit v-if="edit.visible" :param="edit"></Edit>
    <div style="margin-top: 20px">
    </div>
  </div>
</template>

<script>
import MyQueryForm from "@/components/MyQueryForm";
import MyTable from "@/components/MyTable";
import MyPagination from "@/components/MyPagination";
import Add from "@/views/company/Add";
import Edit from "@/views/company/Edit";
import {del, query} from "@/api/company";
import {message} from "@/utils/message";
export default {
  name: "Company",
  components:{MyTable,MyQueryForm,MyPagination,Add,Edit},
  data() {
    return {
      total:0,
      tableData: [],
      multipleSelection: [],
      params:{
        name:'',
        contact:'',
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
        {type:'text',label:'名称',name:'name',placeholder:'按关键字查询'},
        {type:'text',label:'联系人',name:'contact',placeholder:'按关键字查询'},
      ],
      tableCols:[
        {prop:'id', label:'ID', width:80},
        {prop:'name', label:'名称'},
        {prop:'type', label:'类型'},
        {prop:'contact', label:'联系人'},
        {prop:'telephone', label:'联系电话'},
        {prop:'email', label:'邮箱'},
        {prop:'addr', label:'地址'},
        {prop:'size', label:'规模'},
        {prop:'status', label:'状态',slot:'slot_status'},
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
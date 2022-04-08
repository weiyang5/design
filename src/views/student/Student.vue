<template>
  <div>
    <my-query-form :form="params" :items="items" @search="search"></my-query-form>
    <div class="btn-style">
      <el-button size="small" type="primary" @click="create" round>新增</el-button>
      <el-button size="small" type="primary" @click="update" round>修改</el-button>
      <el-button size="small" type="warning" @click="del" round>删除</el-button>
    </div>
    <my-table ref="mutipTable" :tableData="tableData" :tableCols="tableCols">
      <template slot="sex_slot" slot-scope="scope">
        <span v-if="scope.data.sex==0">女</span>
        <span v-else>男</span>
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
import Add from "@/views/student/Add";
import Edit from "@/views/student/Edit";
import {del, query} from "@/api/student";
import {message} from "@/utils/message";
export default {
  name: "Student",
  components:{MyTable,MyQueryForm,MyPagination,Add,Edit},
  data() {
    return {
      total:0,
      tableData: [],
      multipleSelection: [],
      params:{
        name:'',
        college:'',
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
        {type:'text',label:'姓名',name:'name',placeholder:'按关键字查询'},
        {type:'text',label:'学院',name:'college',placeholder:'按关键字查询'},
      ],
      tableCols:[
        {prop:'id', label:'ID', width:80},
        {prop:'name', label:'姓名'},
        {prop:'birthday', label:'出生日期'},
        {prop:'special', label:'专业'},
        {prop:'college', label:'学院'},
        {prop:'education', label:'学历'},
        {prop:'phone', label:'手机号'},
        {prop:'sex', label:'性别',slot:'sex_slot'},
        {prop:'graduateDate', label:'毕业时间'},
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
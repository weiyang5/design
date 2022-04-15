<template>
  <div>
    <my-query-form :form="params" :items="items" @search="search"></my-query-form>
    <div class="btn-style">
      <el-button size="small" type="primary" @click="create" round>新增</el-button>
      <el-button size="small" type="primary" @click="update" round>修改</el-button>
      <el-button size="small" type="warning" @click="del" round>删除</el-button>
    </div>
    <my-table ref="mutipTable" :tableData="tableData" :tableCols="tableCols">

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
import Add from "@/views/train/Add";
import Edit from "@/views/train/Edit";
import {del, query} from "@/api/train";
import {message} from "@/utils/message";
export default {
  name: "Train",
  components:{MyTable,MyQueryForm,MyPagination,Add,Edit},
  data() {
    return {
      total:0,
      tableData: [],
      multipleSelection: [],
      params:{
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
        {type:'text',label:'课程',name:'course',placeholder:'按课程查询'},
      ],
      tableCols:[
        {prop:'id', label:'ID', width:80},
        {prop:'resumeId', label:'简历id'},
        {prop:'startDate', label:'开始时间'},
        {prop:'endDate', label:'结束时间'},
        {prop:'company', label:'培训机构'},
        {prop:'course', label:'培训课程'},
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
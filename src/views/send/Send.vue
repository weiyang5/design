<template>
  <div>
    <div class="btn-style">
      <el-button size="small" type="primary" icon="el-icon-plus" @click="detail" >详情</el-button>
      <el-button size="small" type="warning" @click="del" round>删除</el-button>
    </div>
    <my-table ref="mutipTable" :tableData="tableData" :tableCols="tableCols">
      <template slot="slot_status" slot-scope="scope">
        <!--0待查看|1已查看|2有意向|3不合适-->
        <el-tag v-if="scope.data.status == 0">待查看</el-tag>
        <el-tag v-if="scope.data.status == 1">已查看</el-tag>
        <el-tag v-if="scope.data.status == 2">有意向</el-tag>
        <el-tag v-if="scope.data.status == 3">不合适</el-tag>
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
import {del, query} from "@/api/send";
import {message} from "@/utils/message";
export default {
  name: "Intention",
  components:{MyTable,MyQueryForm,MyPagination},
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
        {type:'text',label:'名称',name:'name',placeholder:'按名称查询'},
      ],
      tableCols:[
        {prop:'id', label:'ID', width:80},
        {prop:'postName', label:'职位'},
        {prop:'companyName', label:'公司'},
        {prop:'studentName', label:'学生名字'},
        {prop:'resumeName', label:'简历名称'},
        {prop:'status', label:'状态',slot:'slot_status'},
        {prop:'sendDate', label:'投递日期'},
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
    detail(){
      message("待做");
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
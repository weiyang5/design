<template>
  <div>
    <my-query-form :form="form" :items="items" @search="search"></my-query-form>
    <div class="btn-panel">
      <el-button size="small" type="danger" icon="el-icon-delete" @click="del">删除</el-button>
    </div>
    <my-table ref="mutipleTable" :tableData="tableData" :tableCols="tableCols">
      <template slot="slot_post" slot-scope="scope">
        {{scope.data.post.name}}
      </template>
      <template slot="slot_company" slot-scope="scope">
        {{scope.data.company.name}}
      </template>
      <template slot="slot_student" slot-scope="scope">
        {{scope.data.student.name}}
      </template>
      <template slot="slot_resume" slot-scope="scope">
        {{scope.data.resume.name}}
      </template>
      <template slot="slot_status" slot-scope="scope">
        <!--0待查看|1已查看|2有意向|3不合适-->
        <el-tag v-if="scope.data.status == 0">待查看</el-tag>
        <el-tag v-if="scope.data.status == 1">已查看</el-tag>
        <el-tag v-if="scope.data.status == 2">有意向</el-tag>
        <el-tag v-if="scope.data.status == 3">不合适</el-tag>
      </template>
    </my-table>
    <my-pagination :page="page" :total="total" @handleCurrentChange="handleCurrentChange"></my-pagination>
  </div>
</template>

<script>
import {query} from "@/api/send";
import {message} from "@/utils/message";
import {del} from '@/api/send'
import MyTable from "@/components/MyTable";
import MyPagination from "@/components/MyPagination";
import MyQueryForm from "@/components/MyQueryForm";
export default {
  name:"Send",
  components: {MyQueryForm, MyPagination,MyTable},
  data(){
    return{
      total:0,
      page:1,
      tableData:[],
      tableCols:[
        {prop:'id', label:'ID', width:80},
        {prop:'postId', label:'职位',slot:'slot_post'},
        {prop:'companyId', label:'公司',slot:'slot_company'},
        {prop:'studentId', label:'学生姓名',slot:'slot_student'},
        {prop:'resumeId', label:'简历名称',slot:'slot_resume'},
        {prop:'status', label:'状态',slot:'slot_status'},
        {prop:'sendDate', label:'投递日期'},
      ],
      form:{
        postId:'',
      },
      items:[
        {type:'text',label:'职位名称',name:'postId',placeholder:'按关键字查询'},
      ],
    }
  },
  mounted() {
    this.list({})
  },
  methods:{
    handleCurrentChange(val){
      this.page = val;
      let params = this.form;
      params.page = this.page
      console.log(params);
      this.list(params);
    },
    search(){
      this.list(this.form);
    },
    list(params){
      query(params).then(res=>{
        this.tableData = res.data;
        this.total = res.total;
      })
    },
    del(){
      let selection = this.$refs['mutipleTable'].selection;
      if(selection.length>0){
        this.$confirm('确定要删除吗','删除提示').then(()=>{
          let arr = selection.map(item=>item.id);
          let ids = arr.join(',');
          del(ids).then(res=>{
            message.success(res.msg);
            this.search()
          })
        }).catch(()=>{})
      }else{
        message.warning('请选择要删除的数据')
      }
    }
  }
}
</script>

<style scoped>

</style>